import { CustomRouter } from "../CustomRouter";
import * as controllers from "../controllers";

const renderRouter = new CustomRouter();

renderRouter.registerRoute('get', "/complex", [], controllers.Render.complex);

renderRouter.applyRoutes();

export default renderRouter.router;
