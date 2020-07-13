import React, {useState} from 'react';
import './App.css';
import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'
//import Card from './components/Card'


function App() {

  const [min,setMin] = useState(10)
  const [max,setMax] = useState(999)

  return (
    <div className="App">
  
      <h1>Demo React-Redux (Versão Simples)</h1>

      <div className="linha"> 
        <Intervalo  min={min} max={max}
          onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>  
      </div>

{/* 1o Sorteio */} 
      <div className="linha"> 
        <Media min={min} max={max}></Media>
        <Soma  min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>

{/* 2o Sorteio */} 
      <div className="linha"> 
        <Media min={min} max={max}></Media>
        <Soma  min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>

{/* 3o Sorteio */} 
<div className="linha"> 
        <Media min={min} max={max}></Media>
        <Soma  min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>

{/* 4o Sorteio */} 
<div className="linha"> 
        <Media min={min} max={max}></Media>
        <Soma  min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>

{/* 5o Sorteio */} 
<div className="linha"> 
        <Media min={min} max={max}></Media>
        <Soma  min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>

{/* 6o Sorteio */} 
<div className="linha"> 
        <Media min={min} max={max}></Media>
        <Soma  min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>




    </div>
  );
}

export default App;
