import React from 'react';
import './style.css';
import Search from './components/Search.jsx';
import Propsfr from './components/Propsfr';

export default function App() {
  return (
    <div>
      <p>find the value of x</p>

      <div>
        <Propsfr name="xyz" surname=" pati" />

        <Propsfr name="sdf" surname=" roll" />
      </div>
    </div>
  );
}
