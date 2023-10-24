import React from 'react';

import { Typography } from 'antd';

import './index.css';

const { Title, Text } = Typography;

export default function ScheduleBox() {
  return (
    <div className="schedule-box">
      <div className="schedule-img"></div>
      <div className="schedule-info">
        <Title level={5}>Joe Bartmann</Title>
        <Text>HR Manager at Divvy</Text>
      </div>
    </div>
  );
}
