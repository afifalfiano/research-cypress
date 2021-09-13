import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const configSqlite: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db_research',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
  logging: true,
};

export default configSqlite;
