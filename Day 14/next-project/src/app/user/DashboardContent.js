import React from 'react';

import { Typography, Row, Col, Card, Table, Image, Tag } from 'antd';
import { ArrowRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

import Chart from 'react-apexcharts';

import ScheduleBox from '@/components/atoms/ScheduleBox';

import './index.css';

const { Title, Text, Link } = Typography;

export default function DashboardContent() {
  const dataSource = [
    {
      key: '1',
      name: 'FrontEnd Developer',
      image: 'assets/company1.svg',
      company: 'Telkom',
      location: 'Jakarta',
      type: 'Full-Time',
      date_applied: '24 July 2022',
      status: 'In Review',
    },
    {
      key: '2',
      name: 'BackEnd Developer',
      image: 'assets/company2.svg',
      company: 'Pertamina',
      location: 'Surabaya',
      type: 'Freelance',
      date_applied: '23 July 2022',
      status: 'Declined',
    },
  ];

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (_, data) => {
        console.log(data);
        return <Image src={data.image} width={64} height={64} />;
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, data) => {
        return (
          <>
            <Title level={5}>{data.name}</Title>
            <Text>
              {data.company} <span>&#183;</span> {data.location} <span>&#183;</span> {data.type}
            </Text>
          </>
        );
      },
    },
    {
      title: 'Date Applied',
      dataIndex: 'date_applied',
      key: 'date_applied',
      render: (_, data) => {
        return (
          <>
            <Text strong>Date Applied</Text>
            <br />
            <Text>{data.date_applied}</Text>
          </>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, data) => {
        let colorStatus;

        if (data.status === 'In Review') {
          colorStatus = 'yellow';
        } else if (data.status === 'Declined') {
          colorStatus = 'red';
        }

        return (
          <>
            <Tag color={colorStatus}>{data.status}</Tag>
          </>
        );
      },
    },
  ];

  const options = {
    labels: ['Interviewed', 'Unsuitable'],
    legend: {
      show: false,
    },
    colors: ['#E9EBFD', '#4640DE'],
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.15,
        },
      },
    },
  };

  const series = [40, 60];

  return (
    <div>
      <div>
        <Title level={4}>Good Morning, Jake</Title>
        <Text>
          Here is what’s happening with your job search applications from July 19 - July 25.
        </Text>
      </div>

      <Row gutter={24}>
        <Col span={6} style={{ display: 'grid', gap: 20 }}>
          <Card style={{ position: 'relative' }}>
            <Title level={5} style={{ fontSize: 20 }}>
              Total Jobs Applied
            </Title>
            <Text style={{ fontSize: 72, fontWeight: 'Bold' }}>45</Text>
            <div className="icon-card" style={{ background: 'url(/assets/icon1.svg)' }}></div>
          </Card>
          <Card style={{ position: 'relative' }}>
            <Title level={5} style={{ fontSize: 20 }}>
              Interviewed
            </Title>
            <Text style={{ fontSize: 72, fontWeight: 'Bold' }}>18</Text>
            <div className="icon-card" style={{ background: 'url(/assets/icon2.svg)' }}></div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Title level={5} style={{ fontSize: 20 }}>
              Jobs Applied Status
            </Title>
            <div className="chart-box">
              <div className="chart">
                <Chart options={options} series={series} type="donut" />
              </div>
              <div className="series">
                <div className="series-data">
                  <div className="series-rect" style={{ background: '#4640DE' }}></div>
                  <div>
                    <Title level={5}>60%</Title>
                    <Text>Unsuitable</Text>
                  </div>
                </div>

                <div className="series-data">
                  <div className="series-rect" style={{ background: '#E9EBFD' }}></div>
                  <div>
                    <Title level={5}>40%</Title>
                    <Text>Interviewed</Text>
                  </div>
                </div>
              </div>
            </div>

            <Link className="link-strong">
              View All Applications <ArrowRightOutlined />
            </Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Title level={5} style={{ fontSize: 20 }}>
              Upcomming Interviews
            </Title>
            <div className="schedule-header">
              <p>
                <strong>Today, </strong>
                26 November
              </p>
              <div className="moving-schedule">
                <LeftOutlined />
                <RightOutlined />
              </div>
            </div>
            <div className="schedule-body">
              <ScheduleBox />
              <ScheduleBox />
            </div>
            <Link className="link-strong">View All Applications </Link>
          </Card>
        </Col>
      </Row>

      <Card
        title="Recent Applications History"
        extra={<a href="#">More</a>}
        style={{ width: '100%', marginTop: 32 }}>
        <Table dataSource={dataSource} columns={columns} showHeader={false} />
      </Card>
    </div>
  );
}
