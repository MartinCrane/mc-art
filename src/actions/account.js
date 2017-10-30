import axios from 'axios'

export function accountLogin() {

  return axios.post('/sessions',
    {
    method: 'post',
    session: {
      email: `${this.state.email}`,
      password: `${this.state.password}`
    }
  }).then((response) => {
    let jwt = response.data.jwt
    localStorage.setItem(`mcjwt`, jwt)
  }).catch((response) => {
    return response
  });
}
