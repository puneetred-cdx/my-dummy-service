import * as express from "express";
import itemsRouter from "./items";
import usersRouter from "./users";
import renderRouter from "./render";

const baseRouter: express.Router = express.Router();
baseRouter.use("/items", itemsRouter);
baseRouter.use("/users", usersRouter);
baseRouter.use("/render", renderRouter);

export default baseRouter;
