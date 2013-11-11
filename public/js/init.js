require.config({
    baseUrl: "/js",
    deps: [
        "bootstrap",
        "main"
    ],
    shim: {
        bootstrap: {
            deps: [
                "jquery"
            ],
            exports: "jquery"
        }
    },
    paths: {
        jquery: "/components/jquery/jquery",
        "bootstrap": "/components/sass-bootstrap/dist/js/bootstrap",
        // requirejs: "/components/requirejs/require",
    },
    hbs: {
        disableI18n: true
    }
});
