// backend/users.controller.js
const express = require("express");
const userService = require("../services/userService"); // Importando o serviço

const app = express();
// ... resto do código

app.post("/users", async (req, res) => {
  const { email, name, password, age } = req.body;

  // Use o serviço para hashear a senha antes de salvar
  const hashedPassword = await userService.hashPassword(password);

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      age,
    },
  });
  // ... resto do código
});
