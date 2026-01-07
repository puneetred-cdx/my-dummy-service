import { CustomRouter } from "../CustomRouter";
import * as controllers from "../controllers";
import * as middlewares from "../middlewares";

const itemsRouter = new CustomRouter();

itemsRouter.registerRoute('get', "/", [], controllers.Items.getAll);
itemsRouter.registerRoute('post', "/", [middlewares.validateItem], controllers.Items.create);

itemsRouter.applyRoutes();

export default itemsRouter.router;
