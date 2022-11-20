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

async function insertIntoTable() {
  try {
    await database.insert({ game_id: 1, nome: 'Rockstar' }).table('estudios')
  } catch (error) {
    console.log(error)
  }
}

async function oneToOne() {
  try {
    const data = await database
      .select(['games.*', 'estudios.nome as estudios_nome'])
      .table('games')
      .leftJoin('estudios', 'estudios.game_id', 'games.id')
      .where('games.id', 2)

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

async function oneToMany() {
  try {
    const data = await database
      .table('games')
      .innerJoin('estudios', 'estudios.game_id', 'games.id')

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

async function manyToMany() {
  try {
    const data = await database
      .select(['estudios.nome as estudio_nome', 'games.nome as game_nome'])
      .table('games_estudios')
      .innerJoin('games', 'games.id', 'games_estudios.game_id')
      .innerJoin('estudios', 'estudios.id', 'games_estudios.estudios_id')
      .where('estudios.id', 1)

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

async function transaction() {
  try {
    await database.transaction(async trans => {
      await database.insert({ nome: 'Naughty Dog' }).table('estudios')
      await database.insert({ nome: 'Mojang' }).table('estudios')
      await database.insert({ nome: 'Gearbox' }).table('estudios')
    })
  } catch (error) {
    console.log(error)
  }
}
