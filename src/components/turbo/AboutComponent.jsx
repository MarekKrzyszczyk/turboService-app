import React, {Component} from "react";
import {Link} from "react-router-dom";

class AboutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: '',
            errorMessage: ''
        };
    }

    render() {
        return (
            <>
                <h1>O APLIKACJI</h1>
                <div className="container">
                    Serwis turbosprężarek to prosty i przejrzysty sposób na składanie zamówień podczas procesu regeneracji.
                    Dodatkowo pozwala na ewidencjonowanie i podgląd szczegółów każdego zamówienia.
                </div>
            </>
        );
    }
}

export default AboutComponent;