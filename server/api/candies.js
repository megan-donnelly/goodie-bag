const router = require('express').Router();
const { Candy } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    if (candies) res.send(candies.data);
    else res.status(404).send(`Sorry! Couldn't find all candies!`);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const candy = await Candy.findById(req.params.id);
    if (candy) res.send(candy.data);
    else res.status(404).send(`Sorry! Couldn't find that candy!`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
