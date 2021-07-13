const router = require("express").Router();
const { Expense, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/expenses", async (req, res) => {
  try {
    const expenseData = await Expense.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // serialize data so the template can read it
    const expenses = expenseData.map((expense) => expense.get({ plain: true }));

    // pass serialized data and session flag into template
    res.render("expense", {
      expenses,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/expenses/:id", async (req, res) => {
  try {
    const expenseData = await Expense.findAll({
      where: { user_id: req.params.id },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // serialize data so the template can read it
    const expenses = expenseData.map((expense) => expense.get({ plain: true }));

    // pass serialized data and session flag into template
    res.render("expense", {
      expenses,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/create", withAuth, async (req, res) => {
  try {
    res.render("create", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
