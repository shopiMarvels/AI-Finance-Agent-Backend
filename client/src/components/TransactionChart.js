import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TransactionChart = ({ data }) => {
  return (
    <div style={{ height: '400px', marginTop: '30px' }}>
      <h3>Weekly Wallet Activity</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="received" stroke="#82ca9d" />
          <Line type="monotone" dataKey="sent" stroke="#8884d8" />
          <Line type="monotone" dataKey="gas" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionChart; 