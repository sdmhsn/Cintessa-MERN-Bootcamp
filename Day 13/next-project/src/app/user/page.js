'use client';

import React from 'react';

import { Layout } from 'antd';

import './index.css';
import SideBar from '@/components/organisms/Sidebar';

const { Header, Footer, Content } = Layout;

export default function page() {
  return (
    <>
      <Layout className="layout-wrapper">
        <SideBar />
        <Layout>
          <Header className="header">Header</Header>
          <Content className="content">Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
