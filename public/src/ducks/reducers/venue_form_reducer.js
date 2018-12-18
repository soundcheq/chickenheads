const initialState = {
  firstName: '',
  lastName: '',
  jobTitle: '', 
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  contactInfoComplete: false,
  registrationComplete: false,
}

const HANDLE_VENUE_REGISTRATION_INPUT  = "HANDLE_VENUE_REGISTRATION_INPUT"
const CONTACT_INFO_COMPLETE = "CONTACT_INFO_COMPLETE"
const REGISTRATION_COMPLETE = "REGISTRATION_COMPLETE"


function venueFormReducer (state = initialState, action) {
    // console.log('this',action);
    switch (action.type) {
        case HANDLE_VENUE_REGISTRATION_INPUT:
          return {...state, [action.payload.name]: action.payload.value}
        case CONTACT_INFO_COMPLETE:
          return {...state, contactInfoComplete: action.payload}
        case REGISTRATION_COMPLETE:
          return {...state, registrationComplete: action.payload}
        default:
            return state
    }
  }
  
  export function handleVenueRegistrationInput(e) {
    return {
      type: HANDLE_VENUE_REGISTRATION_INPUT,
      payload: e.target
    };
  }

  export function contactInfoCompleteFn(){
    return {
      type: CONTACT_INFO_COMPLETE,
      payload: true
    };
  }

  export function registrationCompleteFn(){
    return {
      type: REGISTRATION_COMPLETE,
      payload: true
    };
  }

  export default venueFormReducer