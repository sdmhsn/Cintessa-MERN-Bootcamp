'use client';

import React from 'react';

import { Button, ConfigProvider, Typography, Input } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

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
          <Input
            placeholder="This is placeholder"
            prefix={
              /* prefix: icon position in left */
              <SearchOutlined
                style={{
                  color: '#A8ADB7',
                  fontSize: '24px',
                  paddingRight: '16px',
                }}
              />
            }
            suffix={
              /* suffix: icon position in right */
              <SearchOutlined
                style={{
                  color: '#A8ADB7',
                  fontSize: '24px',
                  paddingLeft: '16px',
                }}
              />
            }
          />
        </div>
      </ConfigProvider>
    </>
  );
}
