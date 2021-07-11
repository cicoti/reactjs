import React, { Component } from "react";

class MostrarNome extends Component {

    constructor(props) {
        super(props);
        this.nome = "";
    }

    _mostrarNome(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        //this.props.mostrarNome(this.nome);
        console.log(this.nome);
        if(this.nome===""){
            window.alert("Você precisa digitar seu nome...");
        } else {
            window.alert("Olá "+this.nome+"!");
        }
    }

    _handleMostrarNome(evento) {
        evento.stopPropagation();
        this.nome = evento.target.value;
    }


    render() {
        return (
            <div>
                <form onSubmit={this._mostrarNome.bind(this)}>
                    <div><input
                        type="text"
                        placeholder="Digite seu nome aqui!"
                        onChange={this._handleMostrarNome.bind(this)}
                    /></div>
                    <div><button>Mostrar Nome</button></div>
                </form>
            </div>
        )
    }
}

export default MostrarNome;