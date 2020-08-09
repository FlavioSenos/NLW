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

function getWeekday(weekdayNumber){
    const positon = +weekdayNumber;
    return weekdays[positon];
}

function convertHoursToMinutes(time){
    const [hour , minutes ] = time.split(":");
    return Number((hour * 60 )+ +minutes);
}

function convertMinutesToHours(time){
    let hours = Math.floor(time / 60);
    if( hours == 0 ){
        hours = "00";
    }

    let minutes = Number(time % 60);
    if( minutes >= 0 ){
        minutes = "0" + minutes;
    }
    
    return hours+":"+minutes;
}


module.exports = {
    subjects,
    weekdays,
    getSubject,
    getWeekday,
    convertHoursToMinutes,
    convertMinutesToHours    
}