import React, {Component} from "react";
import PartDataService from "../../api/turbo/PartDataService.js";

class ListPartsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: [],
            message: null
        }
        this.deletePartClicked = this.deletePartClicked.bind(this);
        this.updatePartClicked = this.updatePartClicked.bind(this);
        this.refreshParts = this.refreshParts.bind(this);
        this.addPartClicked = this.addPartClicked.bind(this);
    }

    componentDidMount() {
        this.refreshParts();
    }

    refreshParts() {
        PartDataService.retrieveAllParts().then(
            response => {
                this.setState({parts: response.data})
            }
        );
    }

    deletePartClicked(id) {
        PartDataService.deletePart(id).then(
            response => {
                this.setState({message: `Delete of Part ${id} succesful`});
                this.refreshParts();
            }
        )
    }

    addPartClicked() {
        this.props.history.push('/part/-1')
    }

    render() {
        return (
            <div className="ListPartsComponent">
                <h1>Części do turbosprężarek</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Lp</th>
                            <th>Nazwa</th>
                            <th>Modyfikacja</th>
                            <th>Usuwanie</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.parts.map(
                                part =>
                                    <tr key={part.id}>
                                        <td>{part.id}</td>
                                        <td>{part.name}</td>
                                        <td>
                                            <button className="btn btn-success"
                                                    onClick={() => this.updatePartClicked(part.id)}>Modyfikuj
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning"
                                                    onClick={() => this.deletePartClicked(part.id)}>Usuń
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addPartClicked}>Dodaj</button>
                    </div>
                </div>
            </div>
        );

    }

    updatePartClicked(id) {
        this.props.history.push(`/part/${id}`);
    }

}


export default ListPartsComponent;