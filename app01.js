const express = require("express");
const cookieParser = require("cookie-parser");

const cookieRouter = 
        require("../cookie-session/src/routers/cookie/cookie_routers");

const sessionRouter = require("./src/routers/session/session_router");
const session = require("express-session");
const sessionConfig = require("./config/cookie-session/config");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use( cookieParser("아무값을키로설정함") ); //암호 받아줌
app.use(session(sessionConfig.sessionConfig));

app.use("/cookie", cookieRouter);
app.use("/session",sessionRouter);

app.listen(3000,()=>{console.log("3000 서버 구동"); } );