export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' -> 'user%20name' (convert all property as url encoded string)
    let encodedVal = encodeURIComponent(params[property]); // shubham 123 -> shubham%20123

    formBody(encodedKey + '=' + encodedVal); // username=shubham , password=123
  }

  return formBody.join('&'); // 'username=shubham&password=1234'
}
