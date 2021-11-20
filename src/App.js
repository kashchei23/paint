import React from 'react';
import ColorPicker from './components/ColorPicker';
import Header from './components/Header';
import ThicknessComponent from './components/Thickness';
import CanvasComponent from './components/Canvas';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ColorPicker />
      <ThicknessComponent />
      <CanvasComponent />
      
    </div>
  );
}

export default App;
