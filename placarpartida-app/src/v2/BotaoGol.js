import React, { Component } from 'react';

class BotaoGol extends Component{

handleClick(event){
    event.preventDefault();
    this.props.marcarGol();
}

    render(){
        return(
            <section>
             <button onClick={this.handleClick.bind(this)}>Gol!</button>
            </section>
        );
    }

}

export default BotaoGol;