import epress from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = epress();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(epress.json({ limit: "16kb" }));
app.use(epress.urlencoded({ extended: true, limit: "16kb" }));
app.use(epress.static("public"));
app.use(cookieParser());
export { app };
