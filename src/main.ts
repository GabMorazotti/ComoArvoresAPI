import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

import { AppModule } from './app.module';
import { SequelizeService } from './service/sequelize.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));

  // Habilitar CORS
  app.enableCors();

  // Aqui você coloca a porta que a aplicação vai escutar
  await app.listen(process.env.RP_PORT || 3000);

  const sequelizeService = app.get(SequelizeService);

  function gracefulShutdown(signal: string) {
    console.log(`${signal} recebido. Fechando conexões...`);
    sequelizeService
      .getSequelizeInstance()
      .close()
      .then(() => {
        console.log('Conexão com o banco de dados fechada.');
        process.exit(0);
      })
      .catch(error => {
        console.error('Erro ao fechar a conexão com o banco de dados:', error);
        process.exit(1);
      });
  }

  // Configuração dos sinais para um encerramento gracioso
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));
  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
}

bootstrap();
