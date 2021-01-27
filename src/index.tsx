// index.tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home';
import KriyaView from './components/KriyaView';

import "antd/dist/antd.css"
import "./index.scss"

ReactDOM.render(
  <div className="App">
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/asanas" component={KriyaView} />
    </Router>
  </div>,
  document.getElementById('root'),
)