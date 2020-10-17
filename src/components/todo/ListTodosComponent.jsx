import React, {Component} from "react";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, description: "Learn React", done: false, targerDate: new Date()},
                {id: 2, description: "Become and expert in Java", done: false, targerDate: new Date()},
                {id: 3, description: "Create turboApps", done: false, targerDate: new Date()}
            ]
        }
    }

    render() {
        return (
            <div className="ListTodosComponent">
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Is completed?</th>
                            <th>Targer date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targerDate.toString()}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;