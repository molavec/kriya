// index.tsx
import React from 'react'
import ReactDOM from 'react-dom'

import { Layout, Row, Col, Card } from 'antd';
const { Header, Footer, Content} = Layout;

import "antd/dist/antd.css"
import "./index.scss"

const NOMBRE_KRIYA = "NOMBRE DE LA KRIYA"

ReactDOM.render(
  <div className="App">
    <>
    <Layout>
        <Header>
          <h1> Kriya App </h1>
        </Header>
        <Content>
        <Row align="top" justify="center">
          <Col span={12}>
          <Card bordered={true} >
            <h1> { NOMBRE_KRIYA } </h1>
            <p>lorem ipsum jsnald  aslk saj fsdkaj flsjd ksaj dkaj ska...</p>
          </Card>
          <Card  >
            <h1> { NOMBRE_KRIYA } </h1>
            <p>lorem ipsum jsnald  aslk saj fsdkaj flsjd ksaj dkaj ska...</p>
          </Card>
          <Card  >
            <h1> { NOMBRE_KRIYA } </h1>
            <p>lorem ipsum jsnald  aslk saj fsdkaj flsjd ksaj dkaj ska...</p>
          </Card>
          </Col>
        </Row>
        </Content>
        {/*<Footer>Footer</Footer>*/}
    </Layout>
    </>

  </div>,
  document.getElementById('root'),
)