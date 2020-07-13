import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
function App() {
  return (
    <div className="App">
      
      <h1>Demo React-Redux (Versão Simples)</h1>
      <div className="linha">
      <Card/>  
      <Card/>  
      <Card/>  
      </div>
      

      <div className="linha">
      <Card/>  
      <Card/>  
      <Card/>  
      </div>
    
    
    </div>
  );
}

export default App;
