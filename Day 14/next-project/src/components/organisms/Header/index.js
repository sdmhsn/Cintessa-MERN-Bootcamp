import React from 'react';

import { Layout, Typography, Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import './index.css';

import { usePathname } from 'next/navigation';

import { menuList } from '@/utils/menuConfig';

const { Header } = Layout;
const { Title } = Typography;

export default function HeaderCustom() {
  const pathname = usePathname();
  const findLabel = menuList.find((prev) => prev.route === pathname);

  return (
    <Header className="header">
      <div>
        <Title level={3}>{findLabel && findLabel.label}</Title>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Button>Back to Homepage</Button>
        <BellOutlined style={{ fontSize: 24 }} />
      </div>
    </Header>
  );
}
