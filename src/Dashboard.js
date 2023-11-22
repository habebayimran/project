// Dashboard.js

import React from 'react';
import Chart from 'react-apexcharts'; // You can use any chart library of your choice

const Dashboard = () => {
  // Placeholder data for demonstration
  const chartOptions = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Income', 'Expenses', 'Profit', 'Loss', 'Other'],
    },
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="rounded-box total-income">
        <h3>Total Income</h3>
        <h2>$10,000.00</h2>
      </div>
      <div className="rounded-box total-expenses">
        <h3>Total Expenses</h3>
        <h2>$5,000.00</h2>
      </div>
      <div className="rounded-box profit">
        <h3>Profit</h3>
        <h2>$5,000.00</h2>
      </div>
      <div className="rounded-box pie-chart">
        <h3>Pie Chart</h3>
        <div className="chart-container">
          <Chart options={chartOptions.options} series={chartOptions.series} type="donut" height={150} />
        </div>
      </div>
      <div className="rounded-box top-customers">
        <h3>Top Customers</h3>
        <p>Customer 1, Customer 2, Customer 3</p>
      </div>
      <div className="rounded-box top-expenses">
        <h3>Top Expenses</h3>
        <p>Marketing, Rent, Supplies</p>
      </div>
    </div>
  );
};

export default Dashboard;