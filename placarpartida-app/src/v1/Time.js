import React, { Component } from 'react';
import BotaoGol from './BotaoGol';

class Time extends Component{

    render(){
        return(
            <section>
                <div>
                    <h1>{this.props.nome}</h1>
                    <h2>{this.props.gols}</h2>
                     <BotaoGol marcarGol={this.props.marcarGol} reverterGol={this.props.reverterGol} gols={this.props.gols}/>
                </div>
            </section>
        );
    }

}

export default Time;