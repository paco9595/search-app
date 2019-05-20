import axios from 'axios'

const baseURL = 'https://searchapi2.herokuapp.com/'

export const getAllVacantes = () => {
  return axios.get(`${baseURL}vacante/`, {}).then(res => res.data)
}
export const getVacante = (id, userID) => {
  return axios.get(`${baseURL}vacante/info/${id}/${userID}`, {}).then(res => {
    console.log(res.data.vacante)
    return {
      vacante: {
        ...res.data.vacante,
        skills: res.data.vacante ? res.data.vacante.skills ? res.data.vacante.skills.split(',') : [] : {}
      }

    }
  })
}
export const getVacanteUser = id => {
  return axios.get(`${baseURL}vacante/user/${id}`, {}).then(({ data }) => data.vacantes)
}

export const applyVacante = (id_vacante, id_usuario) => {
  return axios.put(`${baseURL}vacante/apply/${id_vacante}/${id_usuario}`, {}).then(res => res)
}