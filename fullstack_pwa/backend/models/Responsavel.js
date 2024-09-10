const mongoose = require('mongoose');

const RespSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    // Matricula do filho do responsável, no caso o aluno da instituição
    matriculaaluno: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Responsável', RespSchema);