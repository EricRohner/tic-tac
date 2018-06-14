import React, {Component} from 'react';
import './App.css';
import Square from './Square';
import X from './X';
import O from './O';
import Blank from './Blank';


class App extends Component {
    render() {
        return (
            <main className="App">
                <div className="Line">
                    <Square content={<X/>}/>
                    <Square content={<X/>}/>
                    <Square content={<X/>}/>
                </div>
                <div className="Line">
                    <Square content={<Blank/>}/>
                    <Square content={<Blank/>}/>
                    <Square content={<Blank/>}/>
                </div>
                <div className="Line">
                    <Square content={<O/>}/>
                    <Square content={<O/>}/>
                    <Square content={<O/>}/>
                </div>
            </main>
        );
    }
}

export default App;
