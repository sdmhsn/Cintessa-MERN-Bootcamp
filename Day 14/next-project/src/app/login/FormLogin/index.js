import React, { useState } from 'react';

import { Button, Form, Input, Typography, Radio, Checkbox } from 'antd';

const { Title, Text } = Typography;

import './index.css';

export default function FormSignup() {
  const [mode, setMode] = useState('top');
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div className="form-wrapper">
      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Job Seeker</Radio.Button>
        <Radio.Button value="left">Company</Radio.Button>
      </Radio.Group>

      <Title level={3}>Welcome Back, Dude </Title>

      <Button className="btn-google">Login with Google</Button>

      <div className="text-line">
        <Text style={{ backgroundColor: '#FFFFFF', padding: '0 15px' }}>
          <span style={{ color: '#202430', opacity: 0.5 }}>Or login with email</span>
        </Text>
        <div className="line"></div>
      </div>

      <Form layout="vertical">
        <Form.Item label="Email Address">
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item label="Password">
          <Input placeholder="Enter password" />
        </Form.Item>
        <Form.Item style={{ textAlign: 'left' }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Button type="primary" style={{ width: '100%', fontWeight: 'bold' }}>
          Login
        </Button>
      </Form>

      <p>
        <span style={{ opacity: 0.7 }}>Don’t have an account?</span>{' '}
        <a href="#" style={{ color: '#4640de', fontWeight: 600 }}>
          Sign Up
        </a>
      </p>
    </div>
  );
}
