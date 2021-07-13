import React, { Component } from "react";
import ListaDePlanetas from "./ListaDePlanetas";
import Planeta from "./Planeta";

class SistemaSolar extends Component {

    render(){

        const listaDePlanetas = new ListaDePlanetas();

        listaDePlanetas.adicionarPlaneta(new Planeta(1,"Mercurio"));
        listaDePlanetas.adicionarPlaneta( new Planeta(2,"Venus"));
        listaDePlanetas.adicionarPlaneta( new Planeta(3,"Terra"));
        listaDePlanetas.removerPlaneta(1);
       
        console.log(listaDePlanetas);

        const sistemaSolar = listaDePlanetas.planetas.map((planeta) =>
            <div>{planeta.nome}</div>
        );

        return (
            <div>{sistemaSolar}</div>
        )
    }

}

export default SistemaSolar;

