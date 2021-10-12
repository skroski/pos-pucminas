const { response } = require("express");
const express =  require("express");
const app = express();

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
)


const indexRouter = require("./routers/index");
const todoRouter = require("./routers/todo");

app.use("/", indexRouter);
app.use("/todos", todoRouter)


module.exports = app;