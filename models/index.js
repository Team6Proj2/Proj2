const User = require("./User");
const Expense = require("./Expense");
const Category = require("./Category");

User.hasMany(Expense, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Expense.belongsTo(User, {
  foreignKey: "user_id",
});

Category.hasMany(Expense, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Expense.belongsTo(Category, {
  foreignKey: "category_id",
});

module.exports = { User, Expense, Category };
