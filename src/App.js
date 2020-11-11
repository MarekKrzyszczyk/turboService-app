import React, {Component} from 'react';
import TurboApp from './components/turbo/TurboApp';
import './App.css';
import './bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TurboApp/>
            </div>
        );
    }
}

export default App;