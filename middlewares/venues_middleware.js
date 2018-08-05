module.exports = {
  checkForName(req, res, next) {
    const { id } = req.params
    const { name } = req.body

    if (isNaN(Number(id)))
      return res
        .status(500)
        .send("Request parameter 'id' must be of type Number")

    if (typeof name === 'undefined')
      return res.status(500).send('Request body missing required name property')

    console.log('everything checked out', id)
    next()
  }
}
