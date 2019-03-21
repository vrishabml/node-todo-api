
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
var {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=> {
    res.status(400).send(e);
  });
});

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
  res.send({todos})
  },
(e)=>{
res.status(400).send(e);
})
});

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send('Object Invalid');
  }
  Todo.findById(id).then((todo) => {
    if(!todo)
      return res.status(404).send('Object Not found');
    res.status(200).send({todo});
  }).catch((e) => { res.status(400).send(e); });
});

app.delete('/todos/:id', (req,res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send('ID Invalid! Cannot delete');
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      return res.status(404).send('Cannot find the todo');
    }
    res.send(todo);
}).catch((e) => {
  res.status(400).send();
});
});

app.listen(port,()=>{
  console.log(`Started on port ${port}`);
});

module.exports = {app};
