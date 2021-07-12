import React, { Component } from "react";

class OlaMundo extends Component{

    constructor(props){
        super(props);
        this.nome = props.nome;
    }

    render() {
        return (
            <div>
                <h1>Olá, {this.nome} !</h1>
            </div>
        )
    }

}

export default OlaMundo;