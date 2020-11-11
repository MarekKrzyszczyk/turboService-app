import React, {Component} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import TurboDataService from "../../api/turbo/TurboDataService";

class TurboComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            number: '',
            model: '',
            producer: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {

        if (this.state.id == -1) {
            return;
        }

            TurboDataService.retrieveTurbo(this.state.id).then(
                response => this.setState({
                    number: response.data.number,
                    model: response.data.model,
                    producer: response.data.producer
                })
            );
    }

    onSubmit(values) {
        let turbo = {
            id: this.state.id,
            number: values.number,
            model: values.model,
            producer: values.producer
        };
        if (this.state.id == -1) {
            TurboDataService.createTurbo(turbo).then(
                () => this.props.history.push('/turbos')
            );
        } else {
            TurboDataService.updateTurbo(this.state.id, turbo).then(
                () => this.props.history.push('/turbos')
            );
        }
    }

    validate(values) {
        let errors = {};
        if (!values.number) {
            errors.number = 'Wprowadź numer turbosprężarki';
        }

        if (!values.model) {
            errors.model = 'Wprowadź model turbosprężarki';
        }

        if (!values.producer) {
            errors.producer = 'Wprowadź producenta turbosprężarki';
        }

        return errors;
    }

    render() {
        let {number, model, producer} = this.state;
        return (
            <div>
                <h1>{this.state.id == -1 && 'Dodaj nową turbosprężarkę'}</h1>
                <h1>{this.state.id != -1 && 'Uaktualnij turbosprężarkę'}</h1>
                <div className="container">
                    <Formik initialValues={{number, model, producer}}
                            onSubmit={this.onSubmit}
                            validate={this.validate}
                            validateOnChange={false}
                            validateOnBlur={false}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Numer</label>
                                        <Field className="form-control" type="text"
                                            name="number"></Field>
                                    </fieldset>
                                    <ErrorMessage name="number" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Model</label>
                                        <Field className="form-control" type="text" name="model"></Field>
                                    </fieldset>
                                    <ErrorMessage name="model" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Producent</label>
                                        <Field className="form-control" type="text" name="producer"></Field>
                                    </fieldset>
                                    <ErrorMessage name="producer" component="div" className="alert alert-warning"/>
                                    <button className="btn btn-success" type="submit">Zapisz</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TurboComponent;