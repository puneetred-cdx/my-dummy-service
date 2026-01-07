import * as express from "express";

interface Route {
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    path: string;
    middlewares: express.RequestHandler[];
    handler: express.RequestHandler;
}

export class CustomRouter {
    public router: express.Router;
    private routes: Route[] = [];

    constructor() {
        this.router = express.Router();
    }

    public registerRoute(method: 'get' | 'post' | 'put' | 'delete' | 'patch', path: string, middlewares: express.RequestHandler[], handler: express.RequestHandler) {
        this.routes.push({ method, path, middlewares, handler });
    }

    public applyRoutes() {
        for (const route of this.routes) {
            this.router[route.method](route.path, ...route.middlewares, route.handler);
        }
    }
}
