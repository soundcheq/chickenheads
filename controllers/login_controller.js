const bcrypt = require('bcrypt')

module.exports = {
  login_venue_contact: async (req, res) => {
    try {
      // Get the email and password from the request body
      const { email, password } = req.body
      // Get the VenueContacts model from Sequelize
      const VenueContacts = req.app.get('models').VenueContacts

      // Attempt to find a venue_contact by the provided email
      let venue_contact = await VenueContacts.findOne({ where: { email } })

      // No venue contact was found. Email is incorrect
      if (!venue_contact) return res.status(409).send('Email is incorrect')

      // This code will run if a venue_contact was found
      // Check if the provided password matches the hashed password
      const password_match = await bcrypt.compare(
        password,
        venue_contact.password
      )

      if (password_match) {
        // The passwords match
        // Remove the password from the venue_contact before sending it to the client
        delete venue_contact.dataValues.password
        res.send(venue_contact)
      } else {
        // The passwords did not match
        res.status(409).send('Password is incorrect')
      }
    } catch (err) {
      console.error('login failed in login_controller.js:', err)
      res.status(500).send(`login failed in login_controller.js: ${err}`)
    }
  }
}
