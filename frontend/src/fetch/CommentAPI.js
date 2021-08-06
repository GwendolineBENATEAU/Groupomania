import { API_URL } from '../config'
//URL_COMMENTS = API_URL + /comments
import axios from 'axios'

function create(comment) {
      return axios.post(`${API_URL}/comments`, comment)
}

//route plus utilisée pour le moment
function findAll() {
      return axios.get(`${API_URL}/comments`).then((res) => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
      create,
      findAll,
}
