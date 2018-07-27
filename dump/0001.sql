CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first text,
  last text,
  username text,
  password text,
  vtype1 text,
  vtype2 text,
  vtype3 text,
  stype1 text,
  stype2 text,
  stype3 text,
  gender text,
  bday_day integer,
  bday_month text,
  bday_year integer,
  auth0 text,
  email text
);