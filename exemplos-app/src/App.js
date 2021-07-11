import './App.css';
//import OlaMundo from "./ex1/OlaMundo.js"
//import MostrarNome from "./ex2/MostrarNome.js"
import Contador from './ex3/Contador.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/*<OlaMundo/>*/}
        </div>
        <div>
          {/*<MostrarNome/>*/}
        </div>  
        <div>
          {<Contador/>}
        </div>
      </header>
    </div>
  );
}

export default App;
