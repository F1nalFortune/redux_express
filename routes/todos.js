var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = require('../models/todo');

router.get('/', function(req, res, next) {
  Todo.find( function( err, todos) {
    res.json(todos);
  });
});

router.post('/', function(req, res) {
  new Todo({
    text: req.body.text,
    completed: false
  }).save( function(err, todo) {
    res.json(todo);
  });
});

router.put('/:id', function(req, res) {
  Todo.findById(req.params.id, function( err, todo) {
    todo.completed = !todo.completed;
    todo.save( function(err) {
      res.send(todo);
    });
  });
});

module.exports = router;
