const express = require("express");
const userService = require("../services/userService"); // Ajustar o caminho se necessário

const router = express.Router();

// Rota para criar um novo usuário
router.post("/users", async (req, res) => {
  const { email, password, name, age } = req.body;

  try {
    const newUser = await userService.createUser(email, password, name, age);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
});

// Rota para listar todos os usuários
router.get("/users", async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

// Rotas para atualizar, deletar e buscar usuários por ID...

module.exports = router;
