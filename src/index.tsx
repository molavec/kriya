// index.tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Home from './Home';

import "antd/dist/antd.css"
import "./index.scss"

ReactDOM.render(
  <div className="App">
    <Home />
  </div>,
  document.getElementById('root'),
)