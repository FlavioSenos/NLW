const express = require("express");
const server = express();

const { pageLanding,  pageStudy,  pageGiveClasses, saveClasses, pageSuccess, pageProffy } = require("./pages");

const nunjucks = require("nunjucks");
const pages = require("./pages");
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
.use(express.urlencoded({ extended : true }))
.use(express.static("public"))
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.get("/success",pageSuccess)
.get("/proffy",pageProffy)

.listen(5500);