import request from "supertest";
import { app } from "../app";
import { createConnection } from "typeorm";

describe("finances", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a finance", async () => {
    const user_response = await request(app).post("/users").send({
      email: "user_1@example.com",
      name: "User Example",
      password: "passwordexemple",
    });

    const finance_response = await request(app).post(`/finances/${user_response.body.id}`).send({
      description: "Dívida com agiota",
      value: 200,
    });

    expect(finance_response.status).toBe(201);
    expect(finance_response.body).toHaveProperty("id");
  });

  it("Should be able to delete a finance", async () => {
    const user_response = await request(app).post("/users").send({
      email: "user_3@example.com",
      name: "User Example",
      password: "passwordexemple",
    });

    const finance_response = await request(app).post(`/finances/${user_response.body.id}`).send({
      description: "Aposta no Jogo do Bicho",
      value: 150,
    });

    await request(app).delete(`/finances/${user_response.body.id}`);

    expect(finance_response.body.id).toBeUndefined;
  })
});
