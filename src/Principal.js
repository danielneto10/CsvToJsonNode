const TrataCSV = require('./trataCSV')
const ParseJson = require('./parseJson')
const SalvarJson = require('./salvarJson')
const Queue = require('./queue')

const trataCSV = new TrataCSV('./CSVFiles/brasilCurto.csv')
const promisseTrata = trataCSV.lerArquivo()
    .then(resultado => {
        console.log(resultado)
    })

const parseJson = new ParseJson()
const promisseParse = parseJson.parseCsvToJson()
    .then(resultado => {
        console.log(resultado)
    })

Promise.all([promisseTrata, promisseParse])
    .then((resultado) => {
        new SalvarJson().salvar()
    })