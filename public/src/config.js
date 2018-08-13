export const API = {
  registration: {
    user:
      window.location.hostname === 'localhost'
        ? 'http://localhost:3001/api/register/user'
        : `${window.location.origin}/api/register/user`
  }
}

export default {
  API
}
