# AI Finance Agent Backend

A backend API service for analyzing Ethereum wallet transactions. This API connects to Etherscan to fetch transaction data and provides analytics endpoints for wallet activity.

## Features

- Fetch wallet transaction history
- Get summary of transaction activity
- Chart-friendly data formatting for visualization

## Tech Stack

- Node.js
- Express.js
- Etherscan API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- NPM or Yarn
- Etherscan API key

### Installation

1. Clone the repository
   ```
   git clone https://github.com/shopiMarvels/AI-Finance-Agent-Backend.git
   cd AI-Finance-Agent-Backend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the project root with the following:
   ```
   PORT=3001
   NODE_ENV=development
   ETHERSCAN_API_KEY=your_etherscan_api_key_here
   ```

4. Start the server
   ```
   npm start
   ```
   
   For development with auto-reload:
   ```
   npm run dev
   ```

## API Endpoints

### Get Wallet Transactions and Summary

```
GET /api/wallet/:address
```

**Parameters:**
- `address`: Ethereum wallet address

**Response:**
```json
{
  "address": "0x...",
  "summary": {
    "totalTransactions": 100,
    "totalIn": "24106.5247",
    "totalOut": "0.0000",
    "gasFees": "0.0024"
  },
  "raw": [...]
}
```

### Get Chart-Friendly Daily Data

```
GET /api/wallet/:address/chart-data
```

**Parameters:**
- `address`: Ethereum wallet address

**Response:**
```json
[
  { "date": "2023-04-18", "received": 5.2, "sent": 0.1, "gas": 0.003 },
  { "date": "2023-04-19", "received": 12.0, "sent": 0.0, "gas": 0.001 },
  ...
]
```

## Project Structure

```
ai-finance-agent-backend/
│
├── server.js           # Main entry point
├── routes/             # API routes
│   └── wallet.js       # Wallet endpoints
├── services/           # External service integrations
│   └── etherscan.js    # Etherscan API client
├── utils/              # Utility functions
│   └── analysis.js     # Transaction analysis logic
└── .env                # Environment variables
```

## License

MIT
