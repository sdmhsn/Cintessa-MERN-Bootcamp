'use client';

import React from 'react';

import { Layout } from 'antd';

import './index.css';
import SideBar from '@/components/organisms/Sidebar';
import HeaderCustom from '@/components/organisms/Header';

const { Footer, Content } = Layout;

export default function page() {
  return (
    <>
      <Layout className="layout-wrapper">
        <SideBar />
        <Layout>
          <HeaderCustom />
          <Content className="content">Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
