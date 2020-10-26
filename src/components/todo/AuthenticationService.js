import axios from "axios";

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`http://localhost:8080/basicauth`, {
            headers: {authorization: this.createBasicAuthToken(username, password)}
        });
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`http://localhost:8080/authenticate`, {
                 username, password
            }
        );
    }

    registerSuccesfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createJwtAuthToken(token));
    }

    createBasicAuthToken(username, password) {
        //window.btoa() - kodowanie base64 w js
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    createJwtAuthToken(token) {
        return 'Bearer ' + token;
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        return user !== null;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) {
            return ''
        } else return user;
    }

    setupAxiosInterceptors(basicAuthHeader) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader;
                }
                return config;
            }
        )
    }

}

export default new AuthenticationService();