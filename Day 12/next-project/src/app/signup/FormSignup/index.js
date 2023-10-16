import React, { useState } from 'react';

import { Button, Form, Input, Typography, Radio } from 'antd';

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

      <Title level={3}>Get more opportunities</Title>

      <Button className="btn-google">Sign Up with Google</Button>

      <div className="text-line">
        <Text style={{ backgroundColor: '#FFFFFF', padding: '0 15px' }}>
          <span style={{ color: '#202430', opacity: 0.5 }}>Or sign up with email</span>
        </Text>
        <div className="line"></div>
      </div>

      <Form layout="vertical">
        <Form.Item label="Full Name">
          <Input placeholder="Enter your full name" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item label="Password">
          <Input placeholder="Enter password" />
        </Form.Item>
        <Button type="primary" style={{ width: '100%', fontWeight: 'bold' }}>
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
