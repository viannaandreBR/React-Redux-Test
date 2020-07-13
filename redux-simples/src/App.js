import React from 'react';
import './App.css';
import Intervalo from './components/Intervalo'
import Card from './components/Card'


function App() {
  return (
    <div className="App">
      
      <h1>Demo React-Redux (Versão Simples)</h1>

      <div className="linha"> 
        <Intervalo></Intervalo>  
      
      
      </div>
      <div className="linha"> 
      
      
        <Card title="Card 2" green>Y</Card> 

        <Card title="Card 3" blue>Y</Card> 
      
        <Card title="Card 4" purple>Y</Card> 
    
    </div>
    </div>
  );
}

export default App;
