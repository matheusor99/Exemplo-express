const User = require('../models/User');

class userController { 
    async create(req, res) {
        const { nome, idade, senha } = req.body;

        const user = await User.create({nome, idade, senha});
        res.status(200).json(user)
    }

    async find(req, res) {
        const { nome } = req.query;
        const user = await User.find({ nome })
        res.status(200).json(user)
    }
}

module.exports = new userController;