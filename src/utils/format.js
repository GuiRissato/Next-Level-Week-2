const subjects = [
    "Artes",
    "Biologia",
    "Ciencias",
    "Educacao Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Portugues",
    "Quimica",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terca-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]

// funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
return subjects[position]
}

function convertHoursToMinutes(time){
   const [hour,minutes] =  time.split(":")
   return Number((hour*60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}