import React from "react";
import "./App.css";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";
//import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Demo React-Redux (Versão com Redux)</h1>

      <div className="linha">
        <Intervalo></Intervalo>
      </div>

      {/* Sorteio */}
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
