function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  return login.length >= min && login.length <= max;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line

  if (!isLoginValid(login)) {
    message = ERROR;
    return message;
  }
  if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;
    return message;
  }

  allLogins.push(login);
  message = SUCCESS;
  return message;
}

const logins = ["1234", "12345"];
console.log(addLogin(logins, "1234"));
