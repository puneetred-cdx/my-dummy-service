import { CustomRouter } from "../CustomRouter";
import * as controllers from "../controllers";

const usersRouter = new CustomRouter();

usersRouter.registerRoute('get', "/", [], controllers.Users.getAll);
usersRouter.registerRoute('post', "/", [], controllers.Users.create);

usersRouter.applyRoutes();

export default usersRouter.router;
