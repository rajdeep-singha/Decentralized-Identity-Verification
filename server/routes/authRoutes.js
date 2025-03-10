const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const pool = require("../config/db"); // Import MySQL connection
require("dotenv").config();

const router = express.Router();

// ✅ User Registration
router.post("/register", async (req, res) => {
    const { username, email, password, wallet_address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const sql = "INSERT INTO users (username, email, password_hash, wallet_address) VALUES (?, ?, ?, ?)";
        await pool.query(sql, [username, email, hashedPassword, wallet_address]);

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
});

// ✅ User Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        if (user.length === 0) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user[0].password_hash);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: "Login error" });
    }
});

module.exports = router;

