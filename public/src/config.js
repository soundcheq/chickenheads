export const API = {
  registration: {
    user:
      window.location.hostname === 'localhost'
        ? 'http://localhost:3001/api/register/user'
        : `${window.location.origin}/api/register/user`
    
    ,
    
    venue:
    
    //note the difference in the path.  [API] && 3000 not sure if this is what i need
    
    
      window.location.hostname === 'localhost'
        ? 'http://localhost:3000/register/venue'
        : `${window.location.origin}/register/venue`

  }
}

export default {
  API
}
