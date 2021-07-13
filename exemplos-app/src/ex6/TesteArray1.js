import React, { Component } from "react";

function ListItem(props) {
    // Correto! Não há necessidade de definir a chave aqui:

  //  if(!(props.value % 2)) return <li>{props.value}</li>;
    
   if(props.value > 3) return <li>{props.value}</li>;

    return null;
    
  }

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correto! A chave deve ser definida dentro do array.
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

class TesteArray1 extends Component {

    render () {
    
        var numbers = [1,2,3,4,5,6,7,8];
 
        return (
            <NumberList numbers={numbers} />
        )
    }
}

export default TesteArray1;

