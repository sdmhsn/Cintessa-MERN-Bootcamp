import React from 'react';

import { Image, Layout } from 'antd';

import './index.css';
import { menuList, menuSetting } from '@/utils/menuConfig';

const { Sider } = Layout;

export default function SideBar() {
  return (
    <Sider className="sidebar" width={272}>
      <div className="sidebar-logo">
        <Image src="/assets/logo.png" width={160} height={36} />
      </div>
      <div className="sidebar-menu">
        <ul className="main-menu">
          {menuList.map((item) => (
            <li key={item.key}>{item.label}</li>
          ))}
        </ul>

        <div className="setting-menu">
          <label>Settings</label>
          <ul className="main-menu">
            {menuSetting.map((item) => (
              <li key={item.key}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar-footer"></div>
    </Sider>
  );
}
