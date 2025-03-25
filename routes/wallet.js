const express = require('express');
const router = express.Router();
const { getTransactions } = require('../services/etherscan');
const { analyzeTransactions, getChartData } = require('../utils/analysis');

// Get wallet balance and transaction history
router.get('/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const txs = await getTransactions(address);
    const summary = analyzeTransactions(txs);
    res.json({ address, summary, raw: txs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch wallet data' });
  }
});

// Get chart-friendly daily transaction data
router.get('/:address/chart-data', async (req, res) => {
  const { address } = req.params;
  try {
    const txs = await getTransactions(address);
    const chartData = getChartData(txs, address);
    res.json(chartData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate chart data' });
  }
});

module.exports = router; 