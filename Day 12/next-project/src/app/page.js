'use client';

import React from 'react';

import { Button, ConfigProvider, Typography, Input } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import theme from '@/utils/themeConfig';
// import theme from '../utils/themeConfig'; // this also worked

import '@/styles/master.css';

import { useSelector, useDispatch } from 'react-redux';

import { updateBlog, updateBlogDetail } from '@/redux/blog/action';

import { useEffect } from 'react';

const { Title, Text } = Typography;

export default function Home() {
  const { blog, blogDetail } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const updateData = () => {
    // input data is on updateBlog in blog action
    dispatch(updateBlog());
  };

  const updateDataDetail = () => {
    const data = [{ title: 'test2', description: 'test2' }];
    dispatch(updateBlogDetail(data));
  };

  // data logging
  useEffect(() => {
    console.log(blog);
    console.log(blogDetail);
  }, [blog, blogDetail]);

  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="App">
          <Button type="primary" size="small" onClick={updateData}>
            Update Blog
          </Button>
          <Button type="primary" onClick={updateDataDetail}>
            Update Blog Detail
          </Button>
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
