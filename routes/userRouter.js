const express = require("express");
const userRouter = express.Router();

// const tweets = require('../data/tweets')
const {
    list_all,
    me
    // find_one,
    // create_one,
    // delete_one
} = require('../controllers/userControllers')


userRouter.get("/", list_all);
userRouter.get("/me", me);

// userRouter.get("/:id",find_one)
// userRouter.post("/", create_one)
// userRouter.delete("/:id", delete_one)

module.exports = userRouter