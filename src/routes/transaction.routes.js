const express = require('express');
const router = express.Router();

// Task Model
const Transaction = require('../models/transaction');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Transaction.find();
  res.json(tasks);
});

// GET all Tasks by email
router.get('/:email', async (req, res) => {
  const task = await Transaction.find({ "email": req.params.email });
  res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { address, amount, type, email } = req.body;
  const task = new Transaction({address, amount, type, email});
  await task.save();
  res.json({status: 'Transaction Saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTransaction = {title, description};
  await Transaction.findByIdAndUpdate(req.params.id, newTransaction);
  res.json({status: 'Transaction Updated'});
});

router.delete('/:id', async (req, res) => {
  await Transaction.findByIdAndRemove(req.params.id);
  res.json({status: 'Transaction Deleted'});
});

module.exports = router;
