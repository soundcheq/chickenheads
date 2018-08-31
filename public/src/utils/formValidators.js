export function emailFn(str) {
  if(str === "") {return true}
  let emailTest = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
  let result = emailTest.test(str);
  return result
}
export function passwordFn(str1, str2) {
  console.log(str1, str2)
  if(str1 === "" || str2 === "") {return true}
  if(str1 !== str2){return "No match"} 
  let passwordTest = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
  let result = passwordTest.test(str1)
  return result
}
export function phoneFn(str) {
  if(str === "") {return true}
  let phoneTest = RegExp(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm);
}

export function nameFn(str) {
  if(str === "") {return true}
  let nameTest = RegExp(/^[a-zA-Z0-9]*$/)
  let result = nameTest.test(str)
  return result
}
