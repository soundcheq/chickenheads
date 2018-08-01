module.exports = (sequelize, dataTypes) => {
  return sequelize.define('venues', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.TEXT
    },
    street: {
      type: dataTypes.TEXT
    },
    city: {
      type: dataTypes.TEXT
    },
    state: {
      type: dataTypes.TEXT
    },
    zipcode: {
      type: dataTypes.TEXT
    },
    phone: {
      type: dataTypes.TEXT
    },
    web: {
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
    lat: {
      type: dataTypes.INTEGER
    },
    long: {
      type: dataTypes.INTEGER
    },
    capacity: {
      type: dataTypes.TEXT
    },
    pic1: {
      type: dataTypes.TEXT
    },
    pic2: {
      type: dataTypes.TEXT
    },
    pic3: {
      type: dataTypes.TEXT
    }
  })
}
