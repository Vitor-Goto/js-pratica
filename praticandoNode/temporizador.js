const schedule = require ('node-schedule')

const tarefa1 = schedule.scheduleJob('*/2 * * * * *', function () {
    console.log ('Executando tarefa!', new Date().getSeconds())
})

setTimeout (function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 10000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 15
regra.second = 15

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando Tarefa 2!', new Date ().getSeconds())
})