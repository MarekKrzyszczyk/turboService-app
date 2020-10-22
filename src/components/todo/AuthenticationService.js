import axios from "axios";

class AuthenticationService {
    registerSuccesfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors();
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

    setupAxiosInterceptors() {
        let username = 'm.krzyszczyk';
        let password = 'dummy';
        //window.btoa() - kodowanie base64 w js
        let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
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