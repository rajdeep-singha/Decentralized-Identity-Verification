import React, { useState, useEffect } from "react";
import Web3 from "web3";

function MetamaskLogin() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [message, setMessage] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_requestPermissions",
          params: [{ eth_accounts: {} }],
        });

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setIsConnected(true);
        console.log("Wallet connected:", accounts[0]);

        // Send wallet address to backend
        await authenticateUser(accounts[0]);
      } catch (error) {
        console.error("Connection error:", error);
        alert("Failed to connect MetaMask. Please try again.");
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask!");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setIsConnected(false);
    console.log("Wallet disconnected");
  };

  // Send wallet address to backend for authentication
  const authenticateUser = async (walletAddress) => {
    try {
        const response = await fetch("http://localhost:5000/api/auth/wallet-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ walletAddress }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage(`Welcome, user: ${walletAddress}`);
            localStorage.setItem("authToken", data.token);
        } else {
            setMessage(data.error || "Authentication failed.");
        }
    } catch (error) {
        console.error("Authentication error:", error);
        setMessage("Failed to authenticate. Try again.");
    }
};

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          console.log("Wallet detected but not automatically connecting.");
        }
      }
    };
    checkWalletConnection();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      {isConnected ? (
        <div className="translate-y-3">
          <button
            onClick={disconnectWallet}
            className="px-6 py-2 bg-gradient-to-r from-purple-800 to-blue-800 rounded-full
            font-medium text-white transition-all duration-300 hover:shadow-lg
            hover:shadow-blue-500/25"
          >
            Disconnect Wallet
          </button>
          <p className="mt-[5px] bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent">
            Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </p>
          <p className="text-green-600">{message}</p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
                font-medium text-white transition-all duration-300 hover:shadow-lg
                hover:shadow-blue-500/25"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default MetamaskLogin;
