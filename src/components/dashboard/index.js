import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import DashboardTable from './table';

const Dashboard = () => {

  let data = useSelector((store) => ({
    employee: store.employee
  }))
  return <DashboardTable data = {data.employee}/>
}

export default Dashboard;