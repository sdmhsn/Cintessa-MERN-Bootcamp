import React from 'react';

import { Button, ConfigProvider } from 'antd';

import theme from '@/utils/themeConfig';
// import theme from '../utils/themeConfig'; // this also worked

export default function Home() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      </ConfigProvider>
    </>
  );
}
