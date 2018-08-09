module.exports = {
  sanitizeVenueContact: (req, res, next) => {
    const { email, password } = req.body
    const { user } = req.session

    if (typeof user !== 'undefined') return res.status(200).send(user)

    if (typeof email !== 'string')
      return res
        .status(409)
        .send('Request body missing required email property (Type: string)')

    if (typeof password !== 'string')
      return res
        .status(409)
        .send('Request body missing required password property (Type: string)')

    next()
  }
}
