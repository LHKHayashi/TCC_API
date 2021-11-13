const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
    },
    sex: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    cep: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    complement: String,
});

module.exports = mongoose.model('User', UserSchema);
