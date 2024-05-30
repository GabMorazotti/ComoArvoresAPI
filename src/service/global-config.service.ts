import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalConfigService {
  private globalVariables: { [key: string]: any } = {
    dbHost: '',
    dbName: '',
    currentToken: '',
  };

  get(key: string): any {
    return this.globalVariables[key];
  }

  set(key: string, value: any): void {
    this.globalVariables[key] = value;
  }
}