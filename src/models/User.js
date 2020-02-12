const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    senha: String
});

module.exports = mongoose.model('User', UserSchema)