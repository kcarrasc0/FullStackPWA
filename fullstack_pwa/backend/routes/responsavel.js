const express = require('express');
const router = express.Router();
const Responsável = require('../models/Responsável');

// Criar um novo responsável
router.post('/', async (req, res) => {
    const { nome, cpf, matriculaaluno } = req.body;
    const newResp = new Responsável({ nome, cpf, matriculaaluno });
    await newResp.save();
    res.json(newResp);
});

// Listar todos os responsáveis
router.get('/', async (req, res) => {
    const responsaveis = await Responsável.find();
    res.json(responsaveis);
});

// Atualizar um responsável
router.put('/:id', async (req, res) => {
    const { nome, cpf, matriculaaluno } = req.body;
    const updatedResp = await Responsável.findByIdAndUpdate(req.params.id, { nome, cpf, matriculaaluno }, { new: true });
    res.json(updatedResp);
});

// Deletar um responsável
router.delete('/:id', async (req, res) => {
    await Responsável.findByIdAndDelete(req.params.id);
    res.json({ message: 'Responsável deletado com sucesso!' });
});

module.exports = router;