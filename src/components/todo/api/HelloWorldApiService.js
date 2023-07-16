import { apiClient } from './ApiClient'

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

export const retrieveHelloWorldBean 
    = () => apiClient.get('/login')


//Response to preflight request doesn't pass access control check => Authorization header
export const retrieveHelloWorldPathVariable
    = (username, token) => apiClient.get(`/users/${username}/todos`
    // ,{
    //     headers: {
    //         Authorization: token
    //     }
    // }
    )

