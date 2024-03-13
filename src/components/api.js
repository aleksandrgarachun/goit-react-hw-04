import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = "Client-ID gJSjzN2NN2NOjmUzymC6eNDnVIEWrn63fH7dt7xybRo";
export const LoadImages = async (query, page=1) => {
    const response = axios.get(`/search/photos?query=${query}&page=${page}`);
    return response.data;
}