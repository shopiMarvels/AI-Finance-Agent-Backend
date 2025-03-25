function analyzeTransactions(txs) {
  const now = Date.now();
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;

  const filtered = txs.filter(tx => tx.timeStamp * 1000 >= oneWeekAgo);
  let totalIn = 0, totalOut = 0, gasFees = 0;

  filtered.forEach(tx => {
    const valueEth = parseFloat(tx.value) / 1e18;
    const gasCost = (parseFloat(tx.gasUsed) * parseFloat(tx.gasPrice)) / 1e18;

    if (tx.to.toLowerCase() === tx.from.toLowerCase()) return;

    // Count as incoming transaction
    totalIn += valueEth;
    gasFees += gasCost;
  });

  return {
    totalTransactions: filtered.length,
    totalIn: totalIn.toFixed(4),
    totalOut: totalOut.toFixed(4),
    gasFees: gasFees.toFixed(4),
  };
}

function getChartData(txs, walletAddress) {
  // Group transactions by day
  const dailyData = {};
  walletAddress = walletAddress.toLowerCase();
  
  txs.forEach(tx => {
    // Convert timestamp to date string (YYYY-MM-DD)
    const date = new Date(tx.timeStamp * 1000);
    const dateStr = date.toISOString().split('T')[0];
    
    // Initialize data structure for the day if it doesn't exist
    if (!dailyData[dateStr]) {
      dailyData[dateStr] = {
        date: dateStr,
        received: 0,
        sent: 0,
        gas: 0
      };
    }
    
    // Calculate values in ETH
    const valueEth = parseFloat(tx.value) / 1e18;
    const gasCost = (parseFloat(tx.gasUsed) * parseFloat(tx.gasPrice)) / 1e18;
    
    // Skip self-transactions
    if (tx.to.toLowerCase() === tx.from.toLowerCase()) return;
    
    // Determine if transaction is incoming or outgoing relative to the wallet address
    if (tx.to.toLowerCase() === walletAddress) {
      // Incoming transaction - wallet is receiving
      dailyData[dateStr].received += valueEth;
    } else if (tx.from.toLowerCase() === walletAddress) {
      // Outgoing transaction - wallet is sending
      dailyData[dateStr].sent += valueEth;
      // Gas is only counted for outgoing transactions as the sender pays gas
      dailyData[dateStr].gas += gasCost;
    }
  });
  
  // Convert to array and sort by date
  const chartData = Object.values(dailyData).sort((a, b) => 
    new Date(a.date) - new Date(b.date)
  );
  
  // Format numbers to 4 decimal places
  chartData.forEach(day => {
    day.received = parseFloat(day.received.toFixed(4));
    day.sent = parseFloat(day.sent.toFixed(4));
    day.gas = parseFloat(day.gas.toFixed(4));
  });
  
  return chartData;
}

module.exports = { analyzeTransactions, getChartData }; 