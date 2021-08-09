import { API_URL } from '../config'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

function login(credentials) {
      return axios
            .post(`${API_URL}/auth/local`, credentials)
            .then((res) => res.data)
            .then((data) => {
                  window.localStorage.setItem('jwtToken', data.jwt)
                  window.localStorage.setItem('username', data.user.username)
                  axios.defaults.headers['Authorization'] = 'Bearer ' + data.jwt
                  console.log(isAuthenticated())
            })
}

function isAuthenticated() {
      const searchToken = window.localStorage.getItem('jwtToken')
      if (searchToken) {
            const { exp } = jwtDecode(searchToken)
            if (exp * 1000 > new Date().getTime()) {
                  return true
            }
            return false
      }
      return false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
      login,
      isAuthenticated,
}

//URL_LOGIN = API_URL + /auth/local
//URL_REGISTER = API_URL + /auth/local/register
