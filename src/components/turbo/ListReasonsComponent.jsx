import React, {Component} from "react";
import ReasonDataService from "../../api/turbo/ReasonDataService.js";

class ListReasonsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reasons: [],
            message: null
        }
        this.deleteReasonClicked = this.deleteReasonClicked.bind(this);
        this.updateReasonClicked = this.updateReasonClicked.bind(this);
        this.refreshReasons = this.refreshReasons.bind(this);
        this.addReasonClicked = this.addReasonClicked.bind(this);
    }

    componentDidMount() {
        this.refreshReasons();
    }

    refreshReasons() {
        ReasonDataService.retrieveAllReasons().then(
            response => {
                this.setState({reasons: response.data})
            }
        );
    }

    deleteReasonClicked(id) {
        ReasonDataService.deleteReason(id).then(
            response => {
                this.setState({message: `Delete of Reason ${id} succesful`});
                this.refreshReasons();
            }
        )
    }

    addReasonClicked() {
        this.props.history.push('/reason/-1')
    }

    render() {
        return (
            <div className="ListReasonsComponent">
                <h1>Powody usterek</h1>
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
                            this.state.reasons.map(
                                reason =>
                                    <tr key={reason.id}>
                                        <td>{reason.id}</td>
                                        <td>{reason.name}</td>
                                        <td>
                                            <button className="btn btn-success"
                                                    onClick={() => this.updateReasonClicked(reason.id)}>Modyfikuj
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning"
                                                    onClick={() => this.deleteReasonClicked(reason.id)}>Usuń
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addReasonClicked}>Dodaj</button>
                    </div>
                </div>
            </div>
        );

    }

    updateReasonClicked(id) {
        this.props.history.push(`/reason/${id}`);
    }

}


export default ListReasonsComponent;