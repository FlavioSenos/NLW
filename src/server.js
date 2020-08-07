const proffys = [
    { name : "Flavio Senos" , avatar : "https://avatars3.githubusercontent.com/u/19840402?s=460&u=e8fd39b509acc578cdb37d80bb2bbc01a09966fc&v=4" , whatsapp : "5521987982581"
        , bio : "Progrmado , Power BI , Pentaho e outros"
        , subject : "Química" , cost : "45" , weekday : [0] , time_from: [720] , time_to: [1220] },
    { name : "Marcia dos Guimaraes" , avatar : "https://avatars3.githubusercontent.com/u/19840402?s=460&u=e8fd39b509acc578cdb37d80bb2bbc01a09966fc&v=4" , whatsapp : "5521987982581"
        , bio : "Progrmado , Power BI , Pentaho e outros"
        , subject : "Artes" , cost : "45" , weekday : [0] , time_from: [720] , time_to: [1220] }
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
];

function getSubject(subjectNumber){
    const positon = +subjectNumber - 1;
    return subjects[positon];
}

function pageLanding(req,res){
    return res.render("index.html")
}

function pageStudy(req,res){
    const filters = req.query;
    return res.render("study.html" , {proffys , filters , subjects , weekdays})
}

function pageGiveClasses(req,res){
    const data = req.query;
    const isNotEmpty = Object.keys(data).length > 0;

    if( isNotEmpty ){
        data.subject = getSubject(data.subject);
        proffys.push(data);
        return res.redirect("/study");
    }
    return res.render("give-classes.html",{ subjects , weekdays})
}

const express = require("express");
const server = express();

const nunjucks = require("nunjucks");
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
.use(express.static("public"))
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)

.listen(5500);