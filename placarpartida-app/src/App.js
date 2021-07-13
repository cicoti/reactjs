import React, { Component } from 'react';
//import Contador from './Contador';
import Placar from './v1/Placar';
//import Placar from './v2/Placar';

const dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "12/07/2021",
    horario:"19h",
  },
  casa: {
    nome: "Vasco",
  },
  visitante: {
    nome:"Flamengo",
  }
};

class App extends Component{

  
  // v1
  render() {
    return (
        <Placar partida={dados.partida} 
                casa={dados.casa}
                visitante={dados.visitante} />
     );
  }
  

  // v2
  /*
  render() {
    return (
        <Placar {...dados} />
     );
  }
  */

} 

export default App;
