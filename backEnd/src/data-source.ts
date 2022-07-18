import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "4568527931",
  database: "tikiDb",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
