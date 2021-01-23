import * as React from 'react';

import { Layout, Row, Col } from 'antd';
const { Content } = Layout;
import KriyaCard from '../KriyaCard';
import KriyaHeader from '../KriyaHeader'

const Home: React.FunctionComponent = () => (
  <>
    <Layout>
      <KriyaHeader name="Kriya App Home"/>
      <Content>
        
        <Row align="top" justify="center">
          <Col span={12}>
            <KriyaCard name="Este es un nombre" description="esta es una descripción"/>
          </Col>
        </Row>
        
        <Row align="top" justify="center">
          <Col span={12}>
            <KriyaCard name="Este es un nombre" description="esta es una descripción"/>
          </Col>
        </Row>
        
        <Row align="top" justify="center">
          <Col span={12}>
            <KriyaCard name="Este es un nombre" description="esta es una descripción"/>
          </Col>
        </Row>
      </Content>
    </Layout>
  </>
)

export default Home;