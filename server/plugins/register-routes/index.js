import React from "react";
import ReactDOMServer from "react-dom/server";
import Stats from "../../../dist/server/stats.json";
import IndexTemplate from "../../../templates/index.jsx";

const WEBPACK_DEV = process.env.WEBPACK_DEV === "true";
const RENDER_JS = true;
const RENDER_SS = false;

const Index = React.createFactory(IndexTemplate);
const renderIndex = (component) => {
    return "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(component);
};

const makeRouteHandler = (view) => {
    return (request, reply) => {
        const mode = request.query.__mode;
        const renderJs = RENDER_JS && mode !== "nojs";
        const renderSs = RENDER_SS && mode !== "noss";

        let bundleJs;

        if (renderJs) {
            bundleJs = WEBPACK_DEV ?
                "http://"+(process.env.HOST||"127.0.0.1")+":3334/js/bundle.dev.js":
                "/" + Stats.assetsByChunkName.main[0];
        }

        reply(renderIndex(new Index({
            render: {
                js: renderJs
            },
            bundles: {
                js: bundleJs
            },
            content: null
        })));
    };
};

const RegisterRoutes = (server, options, next) => {
    for (let k in options) {
        if (options[k]) {
            server.route({
                method: "GET",
                path: k,
                handler: makeRouteHandler(options[k])
            });
        }
    }

    next();

};

RegisterRoutes.attributes = {
    name: "showcaseDemoRegisterRoutes",
    version: "1.0.0"
};

export default RegisterRoutes;
