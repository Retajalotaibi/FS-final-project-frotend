import http from "./httpServices";
export function login(email, password) {
  const URL = "https://talent2.herokuapp.com/api/v1/login";
  return http.post(URL, {
    email: email,
    password: password,
  });
}
