const Queue = require('./queue')
const Tempo = require('execution-time')()
const Papa = require('papaparse')


class ParseJson {
     parseCsvToJson() {
        Tempo.start()
        return new Promise((resolve, reject) => {
            const continuar = setInterval(() => {
                if(Queue.getFilaCSV().length === 0) {
                    if(Queue.Continuar === false) {
                        const tempoFinal = Tempo.stop()
                        console.log(`Tempo parse: ${tempoFinal.words}`)
                        clearInterval(continuar)
                        resolve({'Resultado': 'Terminou Parse'})
                    }
                }
                else {
                    Queue.insertFilaJSON()
                }
            }, 0);
        })
    }
}

module.exports = ParseJson