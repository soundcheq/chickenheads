const Sequelize = require('sequelize')

// Models
const users_model = require('./users_model')

// .env variables
const { DB_DB, DB_USER, DB_PASS, DB_HOST } = process.env

const sequelize = new Sequelize(DB_DB, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  define: {
    timestamps: false
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
})

let preModels = [{ label: 'Users', setup: users_model }]
let postModels = { models: {}, sequelize }

preModels.map(model => {
  const setupModel = model.setup(sequelize, Sequelize)
  postModels.models[model.label] = setupModel
})

module.exports = postModels
