import express from "express";
import "reflect-metadata";
import "./container";
import createConnection from "./database";
import routes from "./routes";

createConnection();
export const app = express();

app.use(express.json());
app.use(routes);