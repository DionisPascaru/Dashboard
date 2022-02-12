import axios from "axios";

const httpRequest = axios.create({
    baseURL: 'http://localhost:88/api/',
    headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
    },
    timeout: 0,
});

const authInterceptor = (config) => {
    const token = JSON.parse(localStorage.getItem('accessToken'));
    if (token) {
        config.headers[
            "Authorization"
            ] = 'Bearer ' + token;
    }

    return config;
};

const responseInterceptor = (response) => {
    return response.data;
};

httpRequest.interceptors.request.use(authInterceptor);
httpRequest.interceptors.response.use(responseInterceptor);

export default httpRequest;
