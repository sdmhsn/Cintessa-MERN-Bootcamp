'use client';

import React from 'react';

import './index.css';
import DashboardContent from './DashboardContent';
import UserLayout from '@/components/templates/Layout';

export default function page() {
  return (
    <UserLayout>
      <DashboardContent />
    </UserLayout>
  );
}
