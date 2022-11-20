const database = require('./database')

const dados = [
  {
    nome: 'Goat Simulator',
    preco: 10
  },
  {
    nome: 'Dying Light',
    preco: 20
  },
  {
    nome: 'The last of us ||',
    preco: 50
  }
]

async function insert() {
  try {
    const data = await database.insert(dados).into('games')
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

async function select() {
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

async function query() {
  try {
    const test = await database.raw('SELECT * FROM games')
    console.log(test)
  } catch (error) {
    console.log(err)
  }
}

async function deleteSQL() {
  try {
    const reg = await database.where({ id: 3 }).delete().table('games')
    console.log(reg)
  } catch (error) {
    console.log(err)
  }
}

async function update() {
  try {
    await database.where({ id: 4 }).update({ preco: 102.19 }).table('games')
  } catch (error) {
    console.log(err)
  }
}

async function orderBy() {
  try {
    const data = await database.select().table('games').orderBy('preco', 'asc')
    console.log(data)
  } catch (error) {
    console.log(err)
  }
}
