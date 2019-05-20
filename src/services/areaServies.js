import axios from 'axios'

const baseURL = 'https://searchapi2.herokuapp.com/'


export const getAreas = () => {
  return axios.get(`${baseURL}area/`, {}).then(res => res.data)
}