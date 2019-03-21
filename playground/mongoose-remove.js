const {ObjectID} = require('mongodb');
 const {mongoose} =  require('./../server/db/mongoose.js');
 const {Todo} = require('./../server/models/todo.js');
 const {User} = require('./../server/models/user.js');

//Todo.remove
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5c93eda2cd18816b9bc03a0b').then((todo) => {
console.log(todo);
});

Todo.findOneAndRemove({id:'5c93eda2cd18816b9bc03a0b'}).then((todo) => {
  console.log(todo);
});
