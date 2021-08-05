import { API_URL } from '../config'
//URL_COMMENTS = API_URL + /comments
import axios from 'axios'

function create(comment) {
      return axios.post(`${API_URL}/comments`, comment)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
      create,
}
