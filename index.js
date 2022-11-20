const database = require('./database')

const dados = {
  nome: 'COD',
  preco: 199.99
}

async function execute() {
  try {
    const data = await database.insert(dados).into('games')
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

async function getData() {
  try {
    const data = await database.select(['id', 'preco']).table('games')
  } catch (err) {
    console.log(err)
  }
}

async function where() {
  try {
    const dados = await database.whereRaw('preco > 15').table('games')
    console.log(dados)
  } catch (err) {
    console.log(err)
  }
}

async function queryCrua() {
  try {
    const test = await database.raw('SELECT * FROM games')
    console.log(test)
  } catch (error) {
    console.log(err)
  }
}
