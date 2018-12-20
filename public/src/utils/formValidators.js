export function emailFn(str) {
  if(str === "") {return true}
  let emailTest = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
  let result = emailTest.test(str);
  return result
}

export function phoneFn(str){
  if (str === "") {return true}
  let phoneTest = RegExp(/^[2-9]\d{2}[2-9]\d{2}\d{4}$/)
  let digits = str.replace(/\D/g, "")
  let result = phoneTest.test(digits)
  return result
}

export function jobTitleFn(str){
  if (str === "") { return true}
  let jobTitleTest = RegExp(/^[0-9A-Za-z\s\-]+$/)
  let result = jobTitleTest.test(str);
  return result
}

export function passwordFn(str1, str2) {
  if(str1 === "" || str2 === "") {return true}
  if(str1 !== str2){return "No match"} 
  let passwordTest = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
  let result = passwordTest.test(str1)
  return result
}

export function nameFn(str) {
  if(str === "") {return true}
  let nameTest = RegExp(/^[a-zA-Z0-9]*$/)
  let result = nameTest.test(str)
  return result
}

export function websiteFn(str) {
  if(str === "") {return true}
  let websiteTest = RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g)
  let result = websiteTest.test(str)
  return result
}

export function addressFn(str) {
  if(str === "") {return true}
  let addressTest = RegExp(/^[a-z0-9\s,'-]*$/i)
  let result = addressTest.test(str)
  return result
}

export function zipcodeFn(str) {
  if(str === "") {return true}
  let zipcodeTest = RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/)
  let result = zipcodeTest.test(str)
  return result
}