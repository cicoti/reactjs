import React, { Component } from 'react';
import axios from 'axios';

class CEP extends Component{

    state = {
        resposta: []
      }
    
      componentDidMount() {
        axios.get("http://10.60.3.3/AlugueAgoraApi/api/logradouro/findLogradouroByCep/04163060")
          .then(res => {
            const resposta = res.data;
            this.setState(
                { 
                    resposta, 
                });
          })
      }


    render(){

        const {resposta} = this.state;
    
        console.log(resposta[0]);
    
        return(
 
           <div>teste</div>

        )
    }

}

export default CEP;