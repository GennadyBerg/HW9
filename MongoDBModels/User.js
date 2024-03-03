const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login: String,
    password: String,
    email: String
});

const UserModel = mongoose.model('User', UserSchema);

const UserUtils = {
    findUserByLogin: async (login) =>
        await UserModel.findOne({ login }),
    findUserByid: async (id) =>
        await UserModel.findById(id)
}

module.exports = { UserModel, UserUtils };
