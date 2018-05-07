// requirements
var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    impact = require("../lib/index");
    port = 8080,
    app = express();

// configuration
app.set("view engine", "pug");    
app.set("views", __dirname + "/views");

// middleware
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.get("/", function(req, res){
    res.render("index.pug", {
        locals: { title: "Example node-impact server" }
    });
});

// impact server start
var im = impact.listen(app, { root: __dirname + "/public" });

// impact middleware
app.use(express.static(im.root));

// add server start
app.listen(port, function() {
    console.log("app listening on port", port);
});

