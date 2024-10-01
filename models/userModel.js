const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class UserModel {
  async createUser(email, password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return user;
  }

  // Outras funções para o modelo User
}

module.exports = new UserModel();
