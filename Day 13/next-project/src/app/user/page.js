'use client';

import React from 'react';

import { Layout } from 'antd';

import './index.css';

const { Header, Footer, Sider, Content } = Layout;

export default function page() {
  return (
    <>
      <Layout className="layout-wrapper">
        <Sider className="sidebar">Sider</Sider>
        <Layout>
          <Header className="header">Header</Header>
          <Content className="content">Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
