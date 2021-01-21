// index.tsx
import React from 'react'
import ReactDOM from 'react-dom'

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
              <KriyaCard />
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