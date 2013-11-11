requirejs.config({
    baseUrl: "/scripts",
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
        jquery: "../../public/components/jquery/jquery",
        bootstrap: "../../public/components/sass-bootstrap/dist/js/bootstrap",
        requirejs: "../../public/components/requirejs/require",
        "sass-bootstrap": "../../public/components/sass-bootstrap/dist/js/bootstrap"
    },
    hbs: {
        disableI18n: true
    }
});
