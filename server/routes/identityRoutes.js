const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Sample Route: Get all stored identities
router.get("/identities", async (req, res) => {
  try {
    const [identities] = await pool.query("SELECT * FROM identities");
    res.json(identities);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
