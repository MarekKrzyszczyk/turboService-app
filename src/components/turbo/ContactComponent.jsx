import React, {Component} from "react";
import {withRouter} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import moment from "moment";

class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            message: ''
        }

        // this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(values) {
        let errors = {};

        if (!values.name) {
            errors.name = 'Wrowadź swoje imię i nazwisko';
        } else if (values.name.length < 5) {
            errors.name = 'Imię i nazwisko powinno zawierać minimum 5 znaków';
        }

        if (!values.title) {
            errors.title = 'Wprowadź tytuł wiadomości';
        } else if (values.title.length < 5) {
            errors.title = 'Tytuł powinen zawierać minimum 5 znaków';
        }

        if (!values.message) {
            errors.message = 'Napisz wiadomość';
        } else if (values.message.length < 15) {
            errors.message = 'Wiadomość powinna zawierać minimum 15 znaków';
        }

        if (!values.email) {
            errors.email = 'Wprowadź swój adres email';
        }

        return errors;
    }

    render() {
        let {name, email, title, message} = this.state;
        return (
            <div>
                <div className="container">
                    <Formik initialValues={{name, email, title, message}}
                            // onSubmit={this.onSubmit}
                            validate={this.validate}
                            validateOnChange={false}
                            validateOnBlur={false}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Imię i nazwisko</label>
                                        <Field className="form-control" type="text"
                                            name="name"></Field>
                                    </fieldset>
                                    <ErrorMessage name="name" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Email</label>
                                        <Field className="form-control" type="email"
                                               name="email"></Field>
                                    </fieldset>
                                    <ErrorMessage name="email" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Tytuł</label>
                                        <Field className="form-control" type="text"
                                               name="title"></Field>
                                    </fieldset>
                                    <ErrorMessage name="title" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Wiadomość</label>
                                        <Field className="form-control" component="textarea" rows="5" name="message"></Field>
                                    </fieldset>
                                    <ErrorMessage name="message" component="div" className="alert alert-warning"/>
                                    <button className="btn btn-success" type="submit">Wyślij wiadomość</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default ContactComponent;