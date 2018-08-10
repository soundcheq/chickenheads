const bcrypt = require('bcrypt')
const saltRounds = 10
const Op = require('sequelize').Op

module.exports = {
  register_user: (req, res) => {
    try {
      res.send({ hooked_up: true })
    } catch (err) {
      console.error('register_user failed in register_controller.js:', err)
      res
        .status(500)
        .send(`register_user failed in register_controller.js: ${err}`)
    }
  },

  register_venue_contact: async (req, res) => {
    try {
      const VenueContacts = req.app.get('models').VenueContacts
      let { password, email, phone } = req.body

      // Delete unnecessary value
      delete req.body.confirm_password

      // Check for an existing contact by email address and phone
      const existing_contact = await VenueContacts.findOne({
        where: { [Op.or]: [{ email }, { phone }] }
      })

      // A contact already exists with the provided Email or Phone
      if (existing_contact)
        return res.status(500).send('Email or Phone Number is already taken')

      // This code only runs if there is not an existing_contact
      // Salt and hash the password
      const salt = await bcrypt.genSalt(saltRounds)
      const hashed_password = await bcrypt.hash(password, salt)

      // Update the password on the request body to be the hashed version
      req.body.password = hashed_password

      // Create the contact using the values from the request body
      let venue_contact = await VenueContacts.create(req.body)
      // Delete the password from the contact before sending it back to the client
      delete venue_contact.dataValues.password

      res.send(venue_contact)
    } catch (err) {
      console.error(
        'register_venue_contact failed in register_controller.js:',
        err
      )
      res
        .status(500)
        .send(`register_venue_contact failed in register_controller.js: ${err}`)
    }
  },

  register_venue: (req, res) => {
    try {
      res.send({ hooked_up: true })
    } catch (err) {
      console.error('register_venue failed in register_controller.js:', err)
      res
        .status(500)
        .send(`register_venue failed in register_controller.js: ${err}`)
    }
  }
}
