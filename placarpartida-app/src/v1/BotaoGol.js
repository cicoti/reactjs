import React, { Component } from 'react';

class BotaoGol extends Component{

handleGolClick(event){
    event.preventDefault();
    this.props.marcarGol();
}

handleReverterGolClick(event){
    event.preventDefault();
    const gols = this.props.gols;
    if(gols>0) {
        this.props.reverterGol();
    }
}

    render(){
        return(
            <section>
             <button onClick={this.handleGolClick.bind(this)}>Gol!</button>
             <button onClick={this.handleReverterGolClick.bind(this)}>Reverter</button>
            </section>
        );
    }

}

export default BotaoGol;