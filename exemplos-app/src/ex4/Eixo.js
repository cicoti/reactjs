import React, { Component } from "react";

class Eixo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
       this.valor = 0;
    }

    getValor(){
        return this.valor;
    }

    _subtrariContador(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ contador: this.state.contador - 10 });
    }

    _somarContador(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ contador: this.state.contador + 10 });
    }

    render() {

        this.valor = this.state.contador;

        return (
            <div>
                <div>{this.valor}</div>
                <form>
                   <button onClick={this._somarContador.bind(this)}>+</button>
                   <button onClick={this._subtrariContador.bind(this)}>-</button>
               </form>
            </div>
        )
    }

}

export default Eixo;

