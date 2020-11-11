import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'turbo',
            password: 'turbo',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }

    render() {
        return (
            <div className="LoginComponent">
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login succesful</div>}
                    User Name: <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}
                                     onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked() {
        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(
                () => {
                    AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                    this.props.history.push('/about');
                }
            )
            .catch(
                () => {
                    this.setState({
                            showSuccessMessage: false,
                            hasLoginFailed: true
                        }
                    )
                }
            )
    }

}

export default LoginComponent;