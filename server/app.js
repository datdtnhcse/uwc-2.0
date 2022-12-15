var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//
// EDIT SECTION
//

app.use("/", require("./routes/index"));
// TODO: add more router
app.use("/overviewMCP", require("./routes/overviewMCP"));
app.use("/overviewGTC", require("./routes/overviewGTC"));
app.use("/overviewDepot", require("./routes/overviewDepot"));
app.use("/account", require("./routes/account"));
app.use("/collector", require("./routes/collector"));
app.use("/janitor", require("./routes/janitor"));
app.use("/routedata", require("./routes/routedata"));
app.use("/vehicles", require("./routes/vehicles"));
//
// EDIT SECTION END
//

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500).json(res.locals);
});

module.exports = app;
