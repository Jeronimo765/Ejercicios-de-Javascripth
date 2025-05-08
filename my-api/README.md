# My API (Node.js + Express + MySQL)

## Comandos rápidos

1. **Instalar dependencias**:
```bash
npm install
```

2. **Correr en desarrollo**:
```bash
npx nodemon src/server.js
```

3. **Base de datos**:
```sql
CREATE DATABASE my_database;

USE my_database;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
```
