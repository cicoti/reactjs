import './App.css';
//import OlaMundo from "./ex1/OlaMundo.js" // EX1. Teste padrao
//import OlaMundo from "./ex2/OlaMundo.js";// EX2. Envia propriedade para componente 
//import OlaMundo from "./ex3/OlaMundo.js";  // EX3. Usa o state para mostrar o relogio 
//import LoginControl from './ex4/LoginControl';
import CalculatorTemperature from './ex5/CalculatorTemperature';


function App() {
  return (
    <div className="App">
      <header className="App-header">
                
        <div>{/*<OlaMundo/>*/}</div>

        <div>
        <div>{/*<OlaMundo nome="Silvio"/>*/}</div>
        </div>

        <div>
        <div>{/*<OlaMundo/>*/}</div>
        </div>

        <div>
        <div>{/*<LoginControl/>*/}</div>
        </div>

        <div>
        <div>{<CalculatorTemperature/>}</div>
        </div>


      </header>
    </div>
  );
}

export default App;
