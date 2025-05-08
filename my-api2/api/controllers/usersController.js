const usersService = require('../services/usersService');

exports.getAllUsers = async (req, res) => {
    const users = await usersService.getAllUsers();
    res.json(users);
};

exports.getUserById = async (req, res) => {
    const user = await usersService.getUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.createUser = async (req, res) => {
    const newUser = await usersService.createUser(req.body);
    res.status(201).json(newUser);
};

exports.updateUser = async (req, res) => {
    const updatedUser = await usersService.updateUser(req.params.id, req.body);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.deleteUser = async (req, res) => {
    const result = await usersService.deleteUser(req.params.id);
    if (result) {
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};