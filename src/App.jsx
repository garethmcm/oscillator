import React, { useState } from 'react';
import Osc1 from "./components/Osc1";
import './App.css'

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

osc1.start();

function App() {
  const[osc1Freq, setOsc1Freq] = useState(osc1.frequency.value);
  const [count, setCount] = useState(0)

  const changeOscFrequency = e => {
    let {value} = e.target;
    setOsc1Freq(value);
    osc1.frequency.value = value;
  }

  return (
    <div>
    <h1>Sliders</h1>
    <button onClick={() => osc1.start()}>Start</button>
    <button onClick={() => osc1.stop()}>Stop</button>
    <Osc1 changeFreq ={changeOscFrequency}freq={osc1Freq}/>
    </div>
  )
}

export default App
