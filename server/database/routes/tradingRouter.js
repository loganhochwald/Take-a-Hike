const express = require('express');
const tradingRouter = express.Router();
const { Posts } = require('../models/posts');


// Retrieve all posts from db
tradingRouter.get('/', async (req, res) => {

  try {
    const posts = await Posts.findAll();

    if(!posts) {
      res.sendStatus(404);
    }

    res.status(200).send(posts);

  } catch (error) {
    res.status(500).send(error);
  }
});


// Add a new post to db
tradingRouter.post('/', async (req, res) => {

  // This works with Postman, but need to figure out how the team is storing their
  // user data in passport to be able to work with the actual website
  //Probably need to add a verifySession


  try {

    const userId = req.user;
    console.log(userId)
    res.send(userId);
    // const newInfo = {
    //   ...req.body,
    //   user_id: req.params.id
    // };

    // const exists = await Posts.findOne({ where: newInfo });

    // if (exists) {
    //   return res.sendStatus(409);
    // }

    // await Posts.create(newInfo);

    // res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


// Export Router
module.exports = tradingRouter;
