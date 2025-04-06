import React, { useState } from 'react';

const WalletForm = ({ onSubmit }) => {
  const [wallet, setWallet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wallet) onSubmit(wallet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter wallet address"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        style={{ width: '400px', padding: '10px', fontSize: '16px' }}
      />
      <button type="submit" style={{ marginLeft: '10px' }}>Analyze</button>
    </form>
  );
};

export default WalletForm; 