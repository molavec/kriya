// index.tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Layout, Row, Col, Card } from 'antd';
const { Header, Footer, Content } = Layout;
import KriyaCard from './KriyaCard';

import "antd/dist/antd.css"
import "./index.scss"



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
              <KriyaCard name="Este es un nombre" description="esta es una descripción"/>
              <KriyaCard />
              <KriyaCard />
            </Col>
          </Row>
        </Content>
        {/*<Footer>Footer</Footer>*/}
      </Layout>
    </>

  </div>,
  document.getElementById('root'),
)