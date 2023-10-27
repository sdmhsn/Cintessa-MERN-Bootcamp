'use client';

import React from 'react';

import { Layout } from 'antd';

import './index.css';
import SideBar from '@/components/organisms/Sidebar';
import HeaderCustom from '@/components/organisms/Header';

const { Content } = Layout;

export default function UserLayout({ children }) {
  return (
    <>
      <Layout className="layout-wrapper">
        <SideBar />
        <Layout>
          <HeaderCustom />
          <Content className="content">{children}</Content>
        </Layout>
      </Layout>
    </>
  );
}
