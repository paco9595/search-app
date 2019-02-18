import axios from 'axios'

export const SugestionsService = (word)=>{
    return axios.get(`localhost:3977/empresas/search/${word}`,{
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    })
}