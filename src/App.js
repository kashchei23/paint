import React from 'react';
import ColorPicker from './components/ColorPicker';
import Header from './components/Header';
import ThicknessComponent from './components/Thickness';
import CanvasComponent from './components/Canvas';
import TransparencyComponent from './components/Transparency';
import EraserComponent from './components/Eraser';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="contol-canvas-display">
            <div className="control-container">
                <ThicknessComponent />
                <TransparencyComponent />
                <EraserComponent />
                <ColorPicker />
                <a className="footer-button" href="https://darleyinfo.vercel.app/">Back to Home</a>
            </div>
            <CanvasComponent />
        </div>
    </div>
  );
}

export default App;
