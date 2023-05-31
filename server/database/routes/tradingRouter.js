const express = require('express');
const tradingRouter = express.Router();
const { Posts } = require('../models/posts');


// Retrieve all posts from db
tradingRouter.get('/', async (req, res) => {

  try {
    const request = req;
    res.send(req);

  } catch (error) {
    res.status(500).send(error);
  }
});


// Add a new post to db
tradingRouter.post('/:id', async (req, res) => {

  // This works with Postman, but need to figure out how the team is storing their
  // user data in passport to be able to work with the actual website
  //Probably need to add a verifySession
  try {
    const newInfo = {
      ...req.body,
      user_id: req.params.id
    };

    const exists = await Posts.findOne({ where: newInfo });

    if (exists) {
      return res.sendStatus(409);
    }

    await Posts.create(newInfo);

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Export Router
module.exports = tradingRouter;
