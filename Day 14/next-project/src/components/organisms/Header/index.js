import React from 'react';

import { Layout, Typography, Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import './index.css';

const { Header } = Layout;
const { Title } = Typography;

export default function HeaderCustom() {
  return (
    <Header className="header">
      <div>
        <Title level={3}>Dashboard</Title>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button>Back to Homepage</Button>
        <BellOutlined style={{ fontSize: 24 }} />
      </div>
    </Header>
  );
}
