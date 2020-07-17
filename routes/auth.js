const router = require("express").Router();
const Person = require("../model/User");

router.post("/register", async (req, res) => {
  const user = new Person({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
    console.log(savedUser)
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});

module.exports = router;
