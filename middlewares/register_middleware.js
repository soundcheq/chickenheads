const { venue_contact_registration } = require('../utils/validators')

module.exports = {
  validateVenueContact: (req, res, next) => {
    const {
      first_name,
      last_name,
      job_title,
      email,
      phone,
      password,
      confirm_password
    } = req.body

    if (typeof first_name !== 'string')
      return res
        .status(409)
        .send(
          'Request body missing required first_name property (Type: string)'
        )

    if (typeof last_name !== 'string')
      return res
        .status(409)
        .send('Request body missing required last_name property (Type: string)')

    if (typeof job_title !== 'string')
      return res
        .status(409)
        .send('Request body missing required job_title property (Type: string)')

    if (typeof email !== 'string')
      return res
        .status(409)
        .send('Request body missing required email property (Type: string)')

    if (typeof phone !== 'string')
      return res
        .status(409)
        .send('Request body missing required phone property (Type: string)')

    if (typeof password !== 'string')
      return res
        .status(409)
        .send('Request body missing required password property (Type: string)')

    if (typeof confirm_password !== 'string')
      return res
        .status(409)
        .send(
          'Request body missing required confirm_password property (Type: string)'
        )

    if (password !== confirm_password)
      return res.status(409).send('Passwords do not match')

    const results = venue_contact_registration(req.body)

    if (results.error) {
      return res.status(409).send(results)
    }

    next()
  },
  validateVenue: (req, res, next) => {
    next()
  },
  sanitizeUser: (req, res, next) => {}
}
