// index.tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Home from './Home';
import KriyaView from './KriyaView';

import "antd/dist/antd.css"
import "./index.scss"

ReactDOM.render(
  <div className="App">
     <Home /> 
    
    {// <KriyaView />
    }
  </div>,
  document.getElementById('root'),
)