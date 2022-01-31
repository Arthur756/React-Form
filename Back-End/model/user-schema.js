import mongoose, { mongo } from 'mongoose';


const userSchema = mongoose.Schema({
    nome: String,
    CPF: Number,
    sexo: String,
    email: String,
    telefone: Number
});


const user = mongoose.model('user', userSchema)

export default user;