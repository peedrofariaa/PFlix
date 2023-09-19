import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: "88e9a1eb7212495db95d14a311cc51e7",
        language: "en-US",
        page: 1
    }
})

export default api