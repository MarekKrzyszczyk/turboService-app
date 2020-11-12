import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">SERWIS TURBOSPRĘŻAREK</div>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/about">O APLIKACJI</Link></li>
                        {isUserLoggedIn && <li><Link className="nav-link" to="/newOrder">NOWE ZAMÓWIENIE</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/turbos">TURBOSPRĘŻARKI</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/parts">CZĘŚCI</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/reasons">POWODY USTEREK</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/orders">ZAMÓWIENIA</Link></li>}
                        <li><Link className="nav-link" to="/contact">KONTAKT</Link></li>
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">ZALOGUJ</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>WYLOGUJ</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);