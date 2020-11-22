import http from "./httpServices";
export function login(email, password) {
  const URL = "https://jzrr-project.herokuapp.com/login";
  return http.post(URL, {
    email: email,
    password: password,
  });
}
