import Path from "path";
import Hapi from "hapi";
import StaticPaths from "./plugins/static";
//import ApiUsage from "./plugins/api";
//import ProductsPlugin from "@walmart/products-plugin";
import RegisterRoutes from "./plugins/register-routes";
import MakeErrorHandlingCallback from "./error-handling";

const server = new Hapi.Server();

server.connection({
    host: process.env.HOST || '127.0.0.1',
    port: parseInt(process.env.port || 3000),
    routes: {
        cors: true
    }
});

server.register([
    { register: StaticPaths },
    //{ register: ProductsPlugin },
    {
        register: RegisterRoutes,
        options: {
            "/": "index",
            "/home": "index",
            "/faq": "index",
            "/style-guide": "index",
            "/library/{library}": "index",
            "/library/{library}/{component}": "index"
        }
    },
    //{ register: ApiUsage }
],MakeErrorHandlingCallback("Error loading plugins", () => {
    server.start( (err) => {
        console.log("Server running", server.info.uri);
    });
}));
