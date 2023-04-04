const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

//user post(create) request
router.post("", async (req, res) => {
  let user = await User.create(req.body);
  console.log(user);
  return res.send(user);
});
// get(read) request 
router.get("", async (req, res) => {
  let user = await User.find().lean().exec();
  return res.status(200).send({ user });
});

router.get("/users/:id", async (req, res) => {
  let regex = req.params.id;
  let user = await User.find({ _id: regex });
  return res.status(200).send({ user });
});

module.exports = router;
