const {
  name_expression,
  email_expression,
  job_expression,
  phone_expression,
  password_expression
} = require('../utils/regular_expressions')

module.exports = {
  venue_contact_registration: body => {
    const { first_name, last_name, job_title, email, phone, password } = body

    if (name_expression.test(first_name) === false) {
      return {
        error: true,
        field: 'first_name',
        format: 'Alphabet only. 2 - 15 characters in length.'
      }
    }

    if (name_expression.test(last_name) === false) {
      return {
        error: true,
        field: 'last_name',
        format: 'Alphabet only. 2 - 15 characters in length.'
      }
    }

    if (job_expression.test(job_title) === false) {
      return {
        error: true,
        field: 'job_title',
        format: 'Alphabet only. 3 - 60 characters in length.'
      }
    }

    if (email_expression.test(email) === false) {
      return {
        error: true,
        field: 'email',
        format: 'A valid email address.'
      }
    }

    if (phone_expression.test(phone) === false) {
      return {
        error: true,
        field: 'phone',
        // format: '(999) 999 - 9999'
        format: '9999999999'
      }
    }

    if (password_expression.test(password) === false) {
      return {
        error: true,
        field: 'password',
        format:
          '8 - 16 characters in length. At least one lowercase letter, one uppercase letter, one special character, and one number.'
      }
    }

    return {
      error: false
    }
  }
}
