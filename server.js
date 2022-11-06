const express = require('express');
const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json');
const app = express();
const path = require('path');
const fs = require('fs');
