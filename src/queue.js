const Papa = require('papaparse')

class Queue {
    constructor() {
        this.filaCSV = []
        this.filaJSON = []
        this.Continuar = true
    }

    getFilaCSV() {
        return this.filaCSV
    }

    insertFilaCSV(csv) {
        this.filaCSV.push(csv)
    }

    getFilaJSON() {
        return this.filaJSON
    }

    insertFilaJSON() {
        const valor = Papa.parse(this.getFilaCSV().shift(), {
            fastMode: true,
            delimiter: ',',
        })
        this.filaJSON.push(valor.data)
    }

    setContinuarLeitura(valor) {
        this.Continuar = valor 
    }

    isContinuarLeitura() {
        return this.Continuar || this.filaCSV.length > 0
    }
}

module.exports = new Queue()