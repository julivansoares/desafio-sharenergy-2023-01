const bccrypt = require('bcrypt');
const knex = require('../bancodedados/conecao');
const jwt = require('jsonwebtoken');

const cadastrarUsuario = (req, res) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        return res.status(400).json({ mensagem: 'todos os campos são obrigatorios' });
    }

}