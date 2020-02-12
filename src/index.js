require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./routes/')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.STR_DB, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`O servidor está rodando na porta ${process.env.PORT}`)
});