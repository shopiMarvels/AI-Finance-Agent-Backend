const axios = require('axios');

const getTransactions = async (wallet) => {
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${wallet}&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=${process.env.ETHERSCAN_API_KEY}`;

  const response = await axios.get(url);
  if (response.data.status !== "1") {
    throw new Error("No transactions found or Etherscan error");
  }
  return response.data.result;
};

module.exports = { getTransactions }; 