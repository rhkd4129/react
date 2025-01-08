import {mainRoutes} from "../routes";

const findRoute = (path) => {
    for (const main of mainRoutes) {
        if (main.routes) {
            const found = main.routes.find(route => route.path === path);
            if (found) return found;
        }
    }
    return null;
};


export default findRoute;
