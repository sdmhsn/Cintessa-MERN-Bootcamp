'use client';

import React from 'react';

import { Button, ConfigProvider, Typography, Input } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import theme from '@/utils/themeConfig';
// import theme from '../utils/themeConfig'; // this also worked

import '@/styles/master.css';

import { useDispatch, useSelector } from 'react-redux';
import { updateBlog, updateBlogDetail } from '@/redux/blog/action';

import { useEffect } from 'react';

const { Title, Text } = Typography;

/* get the data store outside component:
  import { store } from '@/redux';
  console.log(store.getState().blog.blogDetail);
*/

export default function Home() {
  // const dataReducerBlog = useSelector((state) => state.blog);
  // console.log(dataReducerBlog); // sample of blog reducer contents: { "loading": false, "blog": [ { "title": "test", "description": "test" } ], "blogDetail": [ { "title": "test2", "description": "test2" } ] }

  const { blog, blogDetail } = useSelector((state) => state.blog); // destructuring blog reducer
  const dispatch = useDispatch();

  // const updateData = () => {
  //   dispatch(updateBlog());
  // };

  const updateData = () => {
    const data = [
      {
        title: 'test',
        description: 'test',
      },
    ];
    dispatch(updateBlog(data));
  };

  const updateDataDetail = () => {
    const data = [
      {
        title: 'test2',
        description: 'test2',
      },
    ];
    dispatch(updateBlogDetail(data));
  };

  useEffect(() => {
    console.log(blog);
    console.log(blogDetail);
  }, [blog, blogDetail]);

  return (
    <>
      <ConfigProvider theme={theme}>
        <div className="App">
          <Button type="primary" size="small" onClick={() => updateData()}>
            Update Blog
          </Button>
          <Button type="primary" onClick={() => updateDataDetail()}>
            Button
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
