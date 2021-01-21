// index.tsx
import React from 'react'
import ReactDOM from 'react-dom'


import { Button, DatePicker, Card, version } from "antd"
const { Meta } = Card;

import "antd/dist/antd.css"
import "./index.scss"

console.log('Hello from tsx!')

ReactDOM.render(
  <div className="App">
    <p>Hello Miguel</p>
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>

    <h1>Ejemplo de Card</h1>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </div>,
  document.getElementById('root'),
)