module.exports = (sequelize, dataTypes) => {
  return sequelize.define('venue_contacts', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    first_name: dataTypes.TEXT,
    last_name: dataTypes.TEXT,
    job_title: dataTypes.TEXT,
    email: dataTypes.TEXT,
    phone: dataTypes.TEXT,
    password: dataTypes.TEXT
  })
}
