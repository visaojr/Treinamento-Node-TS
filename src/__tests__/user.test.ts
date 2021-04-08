import request from "supertest";
import { createConnection } from "typeorm";
import { app } from "../app";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "user_0@example.com",
      name: "User Example",
      password: "passwordexemple",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to get all users", async () => {
    const users_response = await request(app).get("/users");

    expect(users_response.body.length).toBeGreaterThan(0);
  });

  it("Should be able to delete an user", async () => {
    const user_response = await request(app).post("/users").send({
      email: "user_2@example.com",
      name: "User Example",
      password: "passwordexemple",
    });

    const finance_response = await request(app).post(`/finances/${user_response.body.id}`).send({
      description: "Dívida com agiota",
      value: 200,
    });

    const deleted_user_response = await request(app).delete(
      `/users/${user_response.body.id}`
    );

    expect(finance_response.body.id).toBeUndefined;
    expect(deleted_user_response.body.id).toBeUndefined;
  });

  it("Should be able to update an user", async () => {
    const user_response = await request(app).post("/users").send({
      email: "user_4@example.com",
      name: "User Example",
      password: "passwordexemple",
    });

    const updated_user_response = await request(app)
      .put(`/users/${user_response.body.id}`)
      .send({
        email: "updated_user@example.com",
        name: "Updated User Example",
        password: "passwordexemple",
      });

    expect(updated_user_response.body.email).toBe("updated_user@example.com");
  });
});
