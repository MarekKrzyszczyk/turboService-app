import React, {Component} from "react";
import OrderDataService from "../../api/turbo/OrderDataService.js";

class ListOrdersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            message: null
        }
        this.deleteOrderClicked = this.deleteOrderClicked.bind(this);
        this.updateOrderClicked = this.updateOrderClicked.bind(this);
        this.refreshOrders = this.refreshOrders.bind(this);
        this.addOrderClicked = this.addOrderClicked.bind(this);
    }

    componentDidMount() {
        this.refreshOrders();
    }

    refreshOrders() {
        OrderDataService.retrieveAllOrders().then(
            response => {
                this.setState({orders: response.data})
            }
        );
    }

    deleteOrderClicked(id) {
        OrderDataService.deleteOrder(id).then(
            response => {
                this.setState({message: 'Pomyślnie usunięto wybrane zamówienie'});
                this.refreshOrders();
            }
        )
    }

    addOrderClicked() {
        this.props.history.push('/orders/-1')
    }


    render() {
        return (
            <div className="ListOrdersComponent">
                <h1>Zamówienia</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Lp</th>
                            <th>Data zamówienia</th>
                            <th>Turbosprężarka</th>
                            <th>Części</th>
                            <th>Powód usterki</th>
                            <th>Status</th>
                            <th>Modyfikacja</th>
                            <th>Usuwanie</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.orders.map(
                                order =>
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.orderDate.toString()}</td>
                                        <td>{order.turbocharger.model}</td>
                                        <td>{order.parts.map((part, key) => key !== order.parts.length - 1 ? (part.name + ', ') : part.name)}</td>
                                        <td>{order.reason.name}</td>
                                        <td>{order.status.name}</td>
                                        <td>
                                            <button className="btn btn-success"
                                                    onClick={() => this.updateOrderClicked(order.id)}>Modyfikuj
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning"
                                                    onClick={() => this.deleteOrderClicked(order.id)}>Usuń
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addOrderClicked}>Dodaj</button>
                    </div>
                </div>
            </div>
        );

    }

    updateOrderClicked(id) {
        this.props.history.push(`/orders/${id}`);
    }

}


export default ListOrdersComponent;