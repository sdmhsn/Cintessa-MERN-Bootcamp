import React from 'react';

import { Button, ConfigProvider } from 'antd';

import theme from '@/utils/themeConfig';
// import theme from '../utils/themeConfig'; // this also worked

import '@/styles/master.css';

export default function Home() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="App">
          <Button type="primary" className="btn-small">
            Button
          </Button>
          <Button type="primary">Button</Button>
          <Button type="primary" size="large">
            Button
          </Button>
        </div>
      </ConfigProvider>
    </>
  );
}
