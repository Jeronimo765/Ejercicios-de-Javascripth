const usersModel = require('../models/usersModel');

exports.getAllUsers = () => {
    return usersModel.getAll();
};

exports.getUserById = (id) => {
    return usersModel.getById(id);
};

exports.createUser = (data) => {
    return usersModel.create(data);
};

exports.updateUser = (id, data) => {
    return usersModel.update(id, data);
};

exports.deleteUser = (id) => {
    return usersModel.remove(id);
};