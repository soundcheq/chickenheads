require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const figlet = require('figlet')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')

// const register_user = require('./controllers/register_controller').register_user

// .env variables
const {
  NODE_ENV,
  SERVER_PORT,
  DB_DB,
  DB_HOST,
  SESSION_SECRET,
  REDIS_HOST,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL
} = process.env

// Create an express app
const app = express()

// Use express.json to read JSON off of requests
app.use(express.json())

// Use express sessions with a redis store
// Redis allows session information to be saved and remembered on server restart
app.use(
  session({
    secret: SESSION_SECRET,
    store: new RedisStore({ host: REDIS_HOST }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: NODE_ENV === 'development' ? false : true,
      maxAge: 600000
    }
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: 'openid profile'
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile)
    }
  )
)

passport.serializeUser(function({ id }, done) {
  done(null, { id })
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

// Log all incoming requests with the morgan package - https://github.com/expressjs/morgan
if (NODE_ENV === 'development') {
  app.use(morgan('dev'))
} else {
  app.use(
    morgan(':method :url - Returned status code :status in :response-time ms')
  )
}

// Import the main router to use on any /api route
app.use('/api', require('./router'))

// Serve front-end
app.use(express.static(`${__dirname}/public/build`))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/public/build/index.html`))
})

// Put server start logic in function for e2e tests down the road
async function startServer(opts = {}) {
  try {
    // e2e tests will pass in a options configuration
    if (Object.keys(opts).length === 0) {
      console.log('Running server normally using .env variables')
    } else {
      console.log(
        'Running server using provided options configuration:',
        JSON.stringify(opts, null, 2)
      )
    }


    // Initialize the sequelize instance using all models in the models folder
    const { sequelizeInstance, models } = require('./models')
    // Async await sequelizes authenticate process
    await sequelizeInstance.authenticate()

    // Set the models on the app instance to avoid multiple instances of sequelize
    // http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html
    app.set('models', models)

    console.log(`Sequelize successfully sync'd to ${DB_DB}@${DB_HOST}`)
    console.log(`Server NODE_ENV: ${opts.NODE_ENV || NODE_ENV}`)
    app.listen(3001, () =>
      console.log(`Server listening on port ${opts.SERVER_PORT || SERVER_PORT}`)
    )

    figlet('Soundcheq Online', (err, data) => {
      console.log(data)
    })
  } catch (err) {
    console.error('startServer failed in index.js:', err)
  }
}

startServer()

module.exports = startServer
