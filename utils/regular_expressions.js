module.exports = {
  name_expression: RegExp(/^[A-Z]{2,15}$/i),
  job_expression: RegExp(/^[A-Z]{3,60}$/i),
  email_expression: RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  phone_expression: RegExp(/\([0-9]{3}\)\s[0-9]{3}\s-\s[0-9]{4}/),
  password_expression: RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/
  )
}
