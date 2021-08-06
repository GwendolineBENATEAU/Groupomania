import { API_URL } from '../config'
//URL_POST = API_URL + /messages
import axios from 'axios'

function findAll() {
      return axios.get(`${API_URL}/messages`).then((res) => res.data)
}

function findOne(id) {
      return axios.get(`${API_URL}/messages/${id}`).then((res) => res.data)
}

function findComments(id) {
      return axios
            .get(`${API_URL}/messages/${id}/comments`)
            .then((res) => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
      findAll,
      findOne,
      findComments,
}
