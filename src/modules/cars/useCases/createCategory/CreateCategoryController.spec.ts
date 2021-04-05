import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { app } from "@shared/infra/http/app";
import { connection } from "@shared/infra/typeorm";

let database: Connection;

describe("Create category controller", async () => {
  beforeAll(async () => {
    database = await connection();

    await database.runMigrations();

    const id = uuidv4();
    const password = await hash("admin", 8);

    await database.query(
      `INSERT INTO users (id, name, email, password, "isAdmin", created_at, driver_license)
       VALUES ('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXX')
      `
    );
  });

  afterAll(async () => {
    // await database.dropDatabase();
    await database.close;
  });

  it("should be able to create a new category", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });

    console.log(responseToken.body);

    const response = await request(app).post("/categories").send({
      name: "Sedan Auth",
      description: "Categoria de carro sedan auth",
    });

    expect(response.status).toBe(201);
  });
});
