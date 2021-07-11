import React, { Component } from "react";

class Contador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
        this._contador = 0;
    }

    _subtrariContador(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ contador: this.state.contador - 1 });
    }

    _somarContador(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ contador: this.state.contador + 1 });
    }

    render() {
        return (
            <div>
                <div>{this.state.contador}</div>
                <form>
                   <button onClick={this._somarContador.bind(this)}>+</button>
                   <button onClick={this._subtrariContador.bind(this)}>-</button>
               </form>
            </div>
        )
    }

}

export default Contador;

