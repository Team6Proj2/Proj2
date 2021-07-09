const router = require("express").Router();
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const expenseRoutes = require("./expenseRoutes");

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/expenses", expenseRoutes);

module.exports = router;
