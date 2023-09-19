'use client';

import React from 'react';

import { Button, ConfigProvider, Typography, Input } from 'antd';

import theme from '@/utils/themeConfig';
// import theme from '../utils/themeConfig'; // this also worked

import '@/styles/master.css';

const { Title, Text } = Typography;

export default function Home() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="App">
          <Button type="primary" size="small">
            Button
          </Button>
          <Button type="primary">Button</Button>
          <Button type="primary" size="large">
            Button
          </Button>
        </div>

        <div className="font-div">
          <Title>h1. Ant Design</Title>
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
          <Title level={5}>h5. Ant Design</Title>
          <Text>Ant Design (default)</Text>
        </div>

        <div className="input-div">
          <Input placeholder="This is placeholder" />
        </div>
      </ConfigProvider>
    </>
  );
}
