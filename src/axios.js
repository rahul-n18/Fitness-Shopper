import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:5001/fitness-shopper/us-central1/api'

    //   
})

export default instance;