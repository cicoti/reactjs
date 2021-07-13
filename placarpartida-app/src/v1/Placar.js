import React, { Component } from 'react';
import Time from './Time';
import Partida from './Partida';

function Mensagem(propsa, propsb){
    const gola = propsa;
    const golb = propsb;
   
    if(gola>golb) return <div>vitoria casa</div>
    if(gola<golb) return <div>vitoria visitante</div>
   
    return <div>empate</div>
}

class Placar extends Component{

    constructor(){
        super();
        this.state = {
            gols_casa:0,
            gols_visitante:0,
        }
    }

    marcarGolCasa(){
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        })
    }

    reverterGolCasa(){
        this.setState({
            gols_casa: this.state.gols_casa - 1,
        })
    }

    marcarGolVisitante(){
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        })
    }

    reverterGolVisitante(){
        this.setState({
            gols_visitante: this.state.gols_visitante - 1,
            
        })
    }

    render(){

        const result = Mensagem(this.state.gols_casa, this.state.gols_visitante);

        return(
        <div>   
            <div style={{float: "left", "marginRight" : "20px"}}>  
                <h3>Casa</h3>
                <Time nome={this.props.casa.nome} gols={this.state.gols_casa} marcarGol={this.marcarGolCasa.bind(this)} reverterGol={this.reverterGolCasa.bind(this)}/>
            </div>
            <div style={{float: "left", "marginRight" : "20px"}}>
                <Partida estadio={this.props.partida.estadio}
                         data={this.props.partida.data}
                         horario={this.props.partida.horario}   />
            </div>
            <div style={{float: "left", "marginRight" : "20px"}}>
                <h3>Visitante</h3>
                <Time nome={this.props.visitante.nome} gols={this.state.gols_visitante} marcarGol={this.marcarGolVisitante.bind(this)} reverterGol={this.reverterGolVisitante.bind(this)}/>
            </div>
                <div style={{clear: "both"}}></div>
                <div>{result}</div>
        </div>    
           
        );
    }

}

export default Placar;