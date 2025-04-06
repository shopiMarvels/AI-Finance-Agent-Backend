# 🧠 AI Finance Agent Frontend

A React-based frontend dashboard for analyzing Ethereum wallet activity using an AI-powered backend.

This app allows users to:
- Input an Ethereum wallet address
- View weekly transaction charts (received, sent, gas)
- Read a GPT-4 generated natural-language summary of wallet activity

---

## 🚀 Features

- 🎯 Wallet address input form
- 📈 Dynamic charts with Recharts
- 🧠 AI-generated insights from GPT-4
- 🔁 Integration with backend REST API
- 💻 Fast and responsive dashboard UI

---

## 🛠 Tech Stack

- React (Create React App)
- Axios
- Recharts
- Node.js backend (via proxy)
- OpenAI API (handled server-side)

---

## 📦 Getting Started

### ✅ Prerequisites

- Node.js (v16 or higher)
- A running backend at `http://localhost:3001`  
  ➤ [Backend Repo](https://github.com/shopiMarvels/AI-Finance-Agent-Backend)

---

### 🧰 Installation

1. Navigate to your project root and create the frontend:

   ```bash
   npx create-react-app client
   cd client
client/
│
├── src/
│   ├── components/
│   │   ├── WalletForm.js        # Wallet address input
│   │   ├── WalletSummary.js     # GPT summary display
│   │   └── TransactionChart.js  # Recharts visualization
│   ├── App.js                   # Main dashboard component
│   └── index.js
└── package.json

