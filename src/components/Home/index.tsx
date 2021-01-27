import * as React from 'react';
import { Link } from 'react-router-dom'

import { Layout, Row, Col } from 'antd';
const { Content } = Layout;
import KriyaCard from '../KriyaCard';
import KriyaHeader from '../KriyaHeader'

const Home: React.FunctionComponent = () => (
  <>
    <Layout>
      <KriyaHeader name="Kriya App Home" />
      <Content>

        <Row align="top" justify="center">
          <Col span={12}>
            <Link to="/asanas">
              <KriyaCard name="Este es un nombre" description="esta es una descripción" />
            </Link>
          </Col>
        </Row>

        <Row align="top" justify="center">
          <Col span={12}>
            <Link to="/asanas">
              <KriyaCard name="Este es un nombre" description="esta es una descripción" />
            </Link>
          </Col>
        </Row>

        <Row align="top" justify="center">
          <Col span={12}>
            <Link to="/asanas">
              <KriyaCard name="Este es un nombre" description="esta es una descripción" />
            </Link>
          </Col>
        </Row>
      </Content>
    </Layout>
  </>
)

export default Home;