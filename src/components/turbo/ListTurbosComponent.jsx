import React, {Component} from "react";
import TurboDataService from "../../api/turbo/TurboDataService.js";

class ListTurbosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turbos: [],
            message: null
        }
        this.deleteTurboClicked = this.deleteTurboClicked.bind(this);
        this.updateTurboClicked = this.updateTurboClicked.bind(this);
        this.refreshTurbos = this.refreshTurbos.bind(this);
        this.addTurboClicked = this.addTurboClicked.bind(this);
    }

    componentDidMount() {
        this.refreshTurbos();
    }

    refreshTurbos() {
        TurboDataService.retrieveAllTurbos().then(
            response => {
                this.setState({turbos: response.data})
            }
        );
    }

    deleteTurboClicked(id) {
        TurboDataService.deleteTurbo(id).then(
            response => {
                this.setState({message: 'Pomyślnie usunięto wybraną turbosprężarkę'});
                this.refreshTurbos();
            }
        )
    }

    addTurboClicked() {
        this.props.history.push('/turbos/-1')
    }

    render() {
        return (
            <div className="ListTurbosComponent">
                <h1>Turbosprężarki</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Lp</th>
                            <th>Numer</th>
                            <th>Model</th>
                            <th>Producent</th>
                            <th>Modyfikacja</th>
                            <th>Usuwanie</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.turbos.map(
                                turbo =>
                                    <tr key={turbo.id}>
                                        <td>{turbo.id}</td>
                                        <td>{turbo.number}</td>
                                        <td>{turbo.model}</td>
                                        <td>{turbo.producer}</td>
                                        <td>
                                            <button className="btn btn-success"
                                                    onClick={() => this.updateTurboClicked(turbo.id)}>Modyfikuj
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning"
                                                    onClick={() => this.deleteTurboClicked(turbo.id)}>Usuń
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTurboClicked}>Dodaj</button>
                    </div>
                </div>
            </div>
        );

    }

    updateTurboClicked(id) {
        this.props.history.push(`/turbos/${id}`);
    }

}


export default ListTurbosComponent;