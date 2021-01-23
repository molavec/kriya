import * as React from 'react';

import { Layout, Row, Col } from 'antd';
const { Header, Content } = Layout;
import AsanaCard from '../AsanaCard';
import KriyaHeader from '../KriyaHeader'

const Home: React.FunctionComponent = () => (
  <>
    <Layout>
      <KriyaHeader name="Nombre de la Kriya"/>
      <Content>
        <Row align="middle" justify="start" gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6} >
            <AsanaCard name="Asana 01" description="esta es una descripción"/>
          </Col>
          <Col xs={24} sm={12} md={6} >
            <AsanaCard name="Asana 02" description="esta es una descripción"/>
          </Col>
          <Col xs={24} sm={12} md={6} >
            <AsanaCard name="Asana 03" description="esta es una descripción"/>
          </Col>
          <Col xs={24} sm={12} md={6} >
            <AsanaCard name="Asana 04" description="esta es una descripción"/>
          </Col>
          <Col xs={24} sm={12} md={6} >
            <AsanaCard name="Asana 05" description="esta es una descripción"/>
          </Col>
          <Col xs={24} sm={12} md={6} >
            <AsanaCard name="Asana 06" description="esta es una descripción"/>
          </Col>
          <Col xs={24} sm={12} md={6} >
            <AsanaCard name="Asana 07" description="esta es una descripción"/>
          </Col>
          <Col xs={24} sm={12} md={6} >
            <AsanaCard name="Asana 08" description="esta es una descripción"/>
          </Col>
          <Col xs={24} sm={12} md={6} >
            <AsanaCard name="Asana 09" description="esta es una descripción"/>
          </Col>
        </Row>
      </Content>
    </Layout>
  </>
)

export default Home;