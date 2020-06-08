const fs = require('fs')
const readline = require('readline')
const Queue = require('./queue')
const Tempo = require('execution-time')()

class TrataCSV {
    constructor(arq) {
        this.arquivo = arq
    }

    lerArquivo() {
        return new Promise((resolve, reject) => {
            Tempo.start()
            const rl = readline.createInterface({
                input: fs.createReadStream(this.arquivo)
            });

            rl.on('line', (line) => {
                Queue.insertFilaCSV(line.replace(/"/g, ''))
            })

            rl.on('close', () => {
                Queue.Continuar = false
                const tempoFinal = Tempo.stop()
                console.log(`Tempo leitura: ${tempoFinal.words}`)
                resolve({'Resultado': 'Terminou leitura CSV'})
            })
        })
    }
}

module.exports = TrataCSV