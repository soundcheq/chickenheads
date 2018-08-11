const { LOGOUT_REDIRECT } = process.env

module.exports = {
  logout: async (req, res) => {
    try {
      // Destroy the user's session (async process)
      await req.session.destroy()
      res.sendStatus(200)
    } catch (err) {
      console.error('logout failed in logout_controller.js:', err)
      res.status(500).send(`logout failed in logout_controller.js: ${err}`)
    }
  },
  logout_user: async (req, res) => {
    try {
      await req.logout()
      await req.session.destroy()
      res.redirect(LOGOUT_REDIRECT)
    }
    catch (err) {
      console.error('user logout failed in logout_controller.js:', err)
      res.status(500).send(`user logout failed in logout_controller.js: ${err}`)
    }
  }
}
