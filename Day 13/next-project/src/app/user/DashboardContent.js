import React from 'react';

import { Typography, Row, Col, Card, Table } from 'antd';

import './index.css';

const { Title, Text, Link } = Typography;

export default function DashboardContent() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div>
      <div>
        <Title level={4}>Good Morning, Jake</Title>
        <Text>
          Here is what’s happening with your job search applications from July 19 - July 25.
        </Text>
      </div>

      <Row gutter={24}>
        <Col span={6} style={{ display: 'grid', gap: 20 }}>
          <Card style={{ position: 'relative' }}>
            <Title level={5} style={{ fontSize: 20 }}>
              Total Jobs Applied
            </Title>
            <Text style={{ fontSize: 72, fontWeight: 'Bold' }}>45</Text>
            <div className="icon-card" style={{ background: 'url(/assets/icon1.svg)' }}></div>
          </Card>
          <Card style={{ position: 'relative' }}>
            <Title level={5} style={{ fontSize: 20 }}>
              Interviewed
            </Title>
            <Text style={{ fontSize: 72, fontWeight: 'Bold' }}>18</Text>
            <div className="icon-card" style={{ background: 'url(/assets/icon2.svg)' }}></div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Title level={5} style={{ fontSize: 20 }}>
              Jobs Applied Status
            </Title>
            <div className="chart-box"></div>
            <Link>View All Applications</Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Title level={5} style={{ fontSize: 20 }}>
              Upcomming Interviews
            </Title>
            <div className="chart-box"></div>
            <Link>View All Applications</Link>
          </Card>
        </Col>
      </Row>

      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: '100%', marginTop: 32 }}>
        <Table dataSource={dataSource} columns={columns} showHeader={false} />
      </Card>
    </div>
  );
}
