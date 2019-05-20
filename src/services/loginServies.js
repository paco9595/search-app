import axios from 'axios'

const baseURL = 'https://searchapi2.herokuapp.com/'

export const setlogin = (user, pass) => {
  return axios.get(`${baseURL}user/?user=${user}&pass=${pass}`, {}).then(
    res => {
      if (res.status === 200) {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        localStorage.setItem('user', JSON.stringify(res.data.user))
      }
      return res
    })
}

export const getUser = (user) => {
  const token = JSON.parse(localStorage.getItem('token'))
  return axios.get(`${baseURL}user/${user}`, {
    headers: {
      authorization: token
    }
  })
}