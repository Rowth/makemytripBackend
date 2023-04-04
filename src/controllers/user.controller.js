const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

//user post(create) request
router.post("", async (req, res) => {
  try {
    let user = await User.create(req.body);
    return res.send(user);
  } catch (error) {
    res.send(error)
  }
});
// get(read) request 
router.get("/name", async (req, res) => {
  let user = await User.find().lean().exec();
  return res.status(200).send({ name: "sdhjkhfshdfsfhbsdfh" });
});

router.get("/users/:id", async (req, res) => {
  let regex = req.params.id;
  let user = await User.find({ _id: regex });
  return res.status(200).send({ user });
});

module.exports = router;
