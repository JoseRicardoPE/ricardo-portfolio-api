import Express from "express";

import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { notFoundHandler } from "./middlewares/not-found.middleware.js";

export const app = Express();

app.use(Express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "ricardo-portfolio-api",
  });
});

app.use(notFoundHandler);
app.use(errorHandler);
