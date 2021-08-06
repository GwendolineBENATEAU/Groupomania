import { API_URL } from '../config'
import axios from 'axios'

function login(credentials) {
      return axios
            .post(`${API_URL}/auth/local`, credentials)
            .then((res) => res.data)
            .then((data) => {
                  window.localStorage.setItem('jwtToken', data.jwt)
                  window.localStorage.setItem('username', data.user.username)
                  axios.defaults.headers['Authorization'] = 'Bearer ' + data.jwt
            })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
      login,
}

//URL_LOGIN = API_URL + /auth/local
//URL_REGISTER = API_URL + /auth/local/register
