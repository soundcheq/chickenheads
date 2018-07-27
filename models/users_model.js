module.exports = (sequelize, dataTypes) => {
  return sequelize.define('users', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    first: {
      type: dataTypes.TEXT
    },

    last: {
      type: dataTypes.TEXT
    },

    username: {
      type: dataTypes.TEXT
    },

    password: {
      type: dataTypes.TEXT
    },

    vtype1: {
      type: dataTypes.TEXT
    },

    vtype2: {
      type: dataTypes.TEXT
    },

    vtype3: {
      type: dataTypes.TEXT
    },

    stype1: {
      type: dataTypes.TEXT
    },

    stype2: {
      type: dataTypes.TEXT
    },

    stype3: {
      type: dataTypes.TEXT
    },

    gender: {
      type: dataTypes.TEXT
    },

    bday_day: {
      type: dataTypes.INTEGER
    },

    bday_month: {
      type: dataTypes.TEXT
    },

    bday_year: {
      type: dataTypes.INTEGER
    },

    auth0: {
      type: dataTypes.TEXT
    },

    email: {
      type: dataTypes.TEXT
    }
  })
}
