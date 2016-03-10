const StaticPaths = (server, options, next) => {

    server.route([
        {
            method: "GET",
            path: "/js/{param*}",
            handler: {
                directory: {
                    path: "dist/js"
                }
            }
        },
        {
            method: "GET",
            path: "/images/{param*}",
            handler: {
                directory: {
                    path: "dist/images"
                }
            }
        }
    ]);

    next();
}
StaticPaths.attributes = {
    name: "showcaseDemoStaticPaths",
    version: "1.0.0"
};
export default StaticPaths;