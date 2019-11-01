// imports

const express = require("express");
const router = express.Router();
router.use(express.json());

const db = require("../data/dbConfig.js");


module.exports = router;