declare module 'mysql2Types' {
  import * as mysql from 'mysql';
  export * from 'mysql';

  export interface IConnection extends mysql.IConnection {
    execute(sql: string, values?: any[]): Promise<any[]>;
  }

}
