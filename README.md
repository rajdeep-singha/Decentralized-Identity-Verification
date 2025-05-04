<h1 align="center">🛡️ Decentralized Identity Verification System (DIVS) 🛡️</h1>
<p align="center">
  <img src="https://github.com/user-attachments/assets/9d7bc3f7-bcd7-4692-905e-1b1e54acafaf" alt="DIVS UI Preview" width="700"/>
</p>
<p align="center"><strong>Secure. Private. Trustless.</strong></p>

<p align="center">A blockchain-powered identity verification platform that puts users in control of their data.</p>

<hr/>

<h2>📸 Product Preview</h2>
<p align="center">
  <img src="https://github.com/user-attachments/assets/90cca14c-226b-4150-af90-fa1ab4757f88" alt="DIVS Verification Interface" width="700"/>
</p>


<h2>📌 Overview</h2>

<p>The <strong>Decentralized Identity Verification System (DIVS)</strong> is a cutting-edge platform that uses <strong>Ethereum/Solana, IPFS,</strong> and <strong>smart contracts</strong> to provide tamper-proof, user-controlled identity verification. Say goodbye to centralized identity silos and hello to <strong>self-sovereign identity!</strong></p>

---

<h2>🚀 Features</h2>

<ul>
  <li><strong>Decentralized Identity Storage</strong> – Immutable records using IPFS & blockchain.</li>
  <li><strong>User-Controlled Data Access</strong> – Grant or revoke access at will.</li>
  <li><strong>Tamper-Proof Verification</strong> – Cryptographic hashing keeps data secure.</li>
  <li><strong>Interoperable & Scalable</strong> – Plug into fintech, edtech, medtech, and beyond.</li>
  <li><strong>Smart Contracts Automation</strong> – Decentralized access control and verification logic.</li>
</ul>

---

<h2>🛠 Tech Stack</h2>

<ul>
  <li><strong>Frontend:</strong> React.js</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Blockchain:</strong> Ethereum / Solana, Solidity Smart Contracts</li>
  <li><strong>Storage:</strong> IPFS (InterPlanetary File System)</li>
  <li><strong>Database:</strong> MySQL (for metadata management)</li>
</ul>

---

<h2>🧠 System Architecture</h2>

<ol>
  <li>Users register and upload identity documents.</li>
  <li>Identity Issuers verify and sign credentials.</li>
  <li>Data is stored on IPFS and hashed into blockchain records.</li>
  <li>Verifiers request access and receive proof via smart contracts.</li>
  <li>Smart Contracts manage access control and verification processes.</li>
</ol>

---

<h2>📂 Project Structure</h2>

<pre>
📦 divs-project
├── 📁 frontend   # React-based UI for user interactions
├── 📁 backend    # Node.js API & blockchain interaction
├── 📁 contracts  # Solidity smart contracts
├── 📁 storage    # IPFS-based document storage
└── README.md     # Project documentation
</pre>

---

<h2>⚙️ Installation & Setup</h2>

<h3>1️⃣ Clone the Repository</h3>

git clone https://github.com/rajdeep-singha/Decentralized-Identity-Verification.git
<br> cd divs
<h3>2️⃣ Install Dependencies</h3>

npm install                # Install backend dependencies <br>
cd frontend <br> npm install  # Install frontend dependencies
<h3>3️⃣ Start Development Server</h3>

npm run dev               # Starts backend server <br>
cd frontend <br> npm start  # Starts frontend
<h3>4️⃣ Deploy Smart Contracts</h3>

cd contracts <br>
npx hardhat compile <br>
npx hardhat deploy --network testnet
<h2>🔐 Security Measures</h2> <ul> <li><strong>Zero-Knowledge Proofs (ZKP)</strong> – Verifies without revealing the data.</li> <li><strong>Data Encryption</strong> – Secure records before storing on IPFS.</li> <li><strong>Role-Based Access Control (RBAC)</strong> – Granular permission layers for users, verifiers, and issuers.</li> </ul>
<h2>📜 License</h2> <p>This project is licensed under the <strong>MIT License</strong> – feel free to fork, build, and innovate!</p>
<p align="center"><em>Built with ❤️ for a privacy-first future</em></p> 
