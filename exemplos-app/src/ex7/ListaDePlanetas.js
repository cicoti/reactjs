export default class ListaDePlanetas {

    constructor(){
        this.planetas = [];
    }

    adicionarPlaneta(novoPlaneta){
        this.planetas.push(novoPlaneta);
    }

    removerPlaneta(index){
        this.planetas.splice(index,1);
    }

}