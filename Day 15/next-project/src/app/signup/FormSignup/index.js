import React, { useState } from 'react';

import { Button, Form, Input, Typography, Radio, message } from 'antd';

const { Title, Text } = Typography;

import { useDispatch, useSelector } from 'react-redux';

import './index.css';
import { actionRegister } from '@/redux/user/action';

import { useRouter } from 'next/navigation';

export default function FormSignup() {
  const [mode, setMode] = useState('top');
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const router = useRouter();

  console.log(loading);

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const register = async (value) => {
    // console.log(value);
    /*
      sample of value output:
      {
        "name": "Tes 1",
        "email": "test@email.com",
        "password": "123456",
        "confirm_password": "123456"
      }
    */

    if (value.password !== value.confirm_password) {
      return messageApi.open({
        type: 'error',
        content: "Password doesn't match",
      });
    }

    const response = await dispatch(actionRegister(value));
    // console.log(response);
    /* 
      sample of response output:
      {message: 'Register Success', status: 200, success: true}
    */

    if (response.success) {
      messageApi.open({
        type: 'success',
        content: response.message,
      });

      router.push('login'); // redirect to /login
    } else {
      messageApi.open({
        type: 'error',
        content: response.message,
      });
    }
  };

  return (
    <div className="form-wrapper">
      {contextHolder}

      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Job Seeker</Radio.Button>
        <Radio.Button value="left">Company</Radio.Button>
      </Radio.Group>

      <Title level={3}>Get more opportunities</Title>

      <Button className="btn-google">Sign Up with Google</Button>

      <div className="text-line">
        <Text style={{ backgroundColor: '#FFFFFF', padding: '0 15px' }}>
          <span style={{ color: '#202430', opacity: 0.5 }}>Or sign up with email</span>
        </Text>
        <div className="line"></div>
      </div>

      <Form layout="vertical" onFinish={register} style={{ textAlign: 'left' }}>
        <Form.Item
          label="Full Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Full Name!',
            },
          ]}>
          <Input placeholder="Enter your full name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your valid Email address!',
              type: 'email',
            },
          ]}>
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}>
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirm_password"
          rules={[
            {
              required: true,
              message: 'Please input your confirm Password!',
            },
          ]}>
          <Input.Password placeholder="Confirm password" />
        </Form.Item>
        <Button
          type="primary"
          style={{ width: '100%', fontWeight: 'bold' }}
          htmlType="submit"
          loading={loading}>
          Continue
        </Button>
      </Form>

      <p>
        <span style={{ opacity: 0.7 }}>Already have an account?</span>{' '}
        <a href="#" style={{ color: '#4640de', fontWeight: 600 }}>
          Login
        </a>
      </p>
      <p
        style={{
          fontSize: '14px',
        }}>
        By clicking 'Continue', you acknowledge that you have read and accept the{' '}
        <a href="#">Terms of Service </a>
        and <a href="#">Privacy Policy</a>.
      </p>
    </div>
  );
}
