const bcrypt = require('bcrypt')
const { SUCCESS_REDIRECT, FAILURE_REDIRECT } = process.env

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

        // Add the user to their session
        req.session.user = venue_contact

        res.send(venue_contact)
      } else {
        // The passwords did not match
        res.status(409).send('Password is incorrect')
      }
    } catch (err) {
      console.error('login failed in login_controller.js:', err)
      res.status(500).send(`login failed in login_controller.js: ${err}`)
    }
  },
  login_user: async (req, res) => {
    try {
      //get the auth id off the request user object
      const { id } = req.user
      const Users = req.app.get('models').Users
      //find user that matches the auth id
      const user = await Users.findOne({ where: { auth0: id }})
      //if user was not found in database, send 409 status
      if (!user) {
        res.status(409).send('No user found in database.')
      }
      //if user was found, redirect to dashboard
      return res.redirect(SUCCESS_REDIRECT)
      
    } catch (err) {
      console.error('user login failed in login controller.js:', err)
      res.status(500).send(`user login failed in login_controller.js: ${err}`)
    }
  }
}
