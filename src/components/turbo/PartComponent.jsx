import React, {Component} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import PartDataService from "../../api/turbo/PartDataService";

class PartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {

        if (this.state.id == -1) {
            return;
        }

            PartDataService.retrievePart(this.state.id).then(
                response => this.setState({
                    name: response.data.name
                })
            );
    }

    onSubmit(values) {
        let part = {
            id: this.state.id,
            name: values.name
        };
        if (this.state.id == -1) {
            PartDataService.createPart(part).then(
                () => this.props.history.push('/parts')
            );
        } else {
            PartDataService.updatePart(this.state.id, part).then(
                () => this.props.history.push('/parts')
            );
        }
    }

    validate(values) {
        let errors = {};
        if (!values.name) {
            errors.name = 'Wprowadź nazwę części'
            return errors;
        }
    }

    render() {
        let {name} = this.state;
        return (
            <div>
                <h1>{this.state.id == -1 && 'Dodaj nową część'}</h1>
                <h1>{this.state.id != -1 && 'Uaktualnij część'}</h1>
                <div className="container">
                    <Formik initialValues={{name}}
                            onSubmit={this.onSubmit}
                            validate={this.validate}
                            validateOnChange={false}
                            validateOnBlur={false}
                            enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Nazwa</label>
                                        <Field className="form-control" type="text"
                                            name="name"></Field>
                                    </fieldset>
                                    <ErrorMessage name="name" component="div" className="alert alert-warning"/>
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

export default PartComponent;