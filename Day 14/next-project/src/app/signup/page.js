'use client';

import React from 'react';

import { Col, Row } from 'antd';

import FormSignup from './FormSignup';

export default function page() {
  return (
    <Row>
      <Col span={11} style={{ backgroundColor: '#F8F8FD', height: '100vh' }}></Col>
      <Col span={13} style={{ backgroundColor: '#FFFFFF', height: '100vh', position: 'relative' }}>
        <FormSignup />
      </Col>
    </Row>
  );
}
