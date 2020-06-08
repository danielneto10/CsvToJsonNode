const fs = require('fs')
const Queue = require('./queue')
const Parse = require('papaparse')
const Tempo = require('execution-time')()

class SalvarJson {
    salvar() {
        Tempo.start()
        const fila = []
        const salvar = Parse.unparse(Queue.getFilaJSON())
        const teste = Parse.parse(salvar.replace(/"/g, ''), {
            fastMode: true,
            header: true,
            delimiter: ',',
            step: function(result) {
                fila.push(result.data)
            }
        })
        fs.writeFile('./CSVFiles/Teste.csv', JSON.stringify(fila, null, 4), function(err) {
            if (err) throw err
        })
        const tempoFinal = Tempo.stop()
        console.log(`Tempo salvar: ${tempoFinal.words}`)

        /* ------------------------------------------------- */

        /* fs.writeFile('./CSVFiles/Teste.csv', JSON.stringify(fila, null, 4), function(err) {
            if (err) throw err
        }) */
    }
}

module.exports = SalvarJson