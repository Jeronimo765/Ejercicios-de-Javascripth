const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

exports.getAll = async () => {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
};

exports.getById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

exports.create = async (data) => {
    const { name, email } = data;
    const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.insertId, name, email };
};

exports.update = async (id, data) => {
    const { name, email } = data;
    await pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    return { id, name, email };
};

exports.remove = async (id) => {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
};