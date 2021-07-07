const sequelize = require("../config/connection");
const { User, Expense, Category } = require("../models");

const userData = require("./userData.json");
const expenseData = require("./expenseData.json");
const categoryData = require("./categoryData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const expense of expenseData) {
    await Expense.create({
      ...expense,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const categories of categoryData) {
    await Category.create({
      ...category,
      category_id: categories[Math.floor(Math.random() * categories.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
