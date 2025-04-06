import React from 'react';

const WalletSummary = ({ summary }) => {
  if (!summary) return null;

  const formatSummary = () => {
    return `Transaction Summary:
    Total Transactions: ${summary.totalTransactions}
    Total Received: ${summary.totalIn} ETH
    Total Sent: ${summary.totalOut} ETH
    Total Gas Fees: ${summary.gasFees} ETH`;
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>AI Summary</h3>
      <div style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        {formatSummary()}
      </div>
    </div>
  );
};

export default WalletSummary; 