import * as React from 'react';

import { Layout, Row, Col } from 'antd';
const { Header, Content } = Layout;
import KriyaCard from '../KriyaCard';

const Home: React.FunctionComponent = () => (
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
    </Layout>
  </>
)

export default Home;