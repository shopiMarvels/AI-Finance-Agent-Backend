import React, { useState } from 'react';
import WalletForm from './components/WalletForm';
import WalletSummary from './components/WalletSummary';
import TransactionChart from './components/TransactionChart';
import axios from 'axios';

function App() {
  const [summary, setSummary] = useState('');
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWalletData = async (wallet) => {
    setLoading(true);
    try {
      const walletRes = await axios.get(`/api/wallet/${wallet}`);
      const chartRes = await axios.get(`/api/wallet/${wallet}/chart-data`);
      setSummary(walletRes.data.summary);
      setChartData(chartRes.data);
    } catch (err) {
      alert("Error fetching wallet data.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h2>🧠 Finance AI Wallet Analyzer</h2>
      <WalletForm onSubmit={fetchWalletData} />
      {loading && <p>Loading data...</p>}
      {chartData.length > 0 && <TransactionChart data={chartData} />}
      {summary && <WalletSummary summary={summary} />}
    </div>
  );
}

export default App;
