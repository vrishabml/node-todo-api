const {ObjectID} = require('mongodb');
 const {mongoose} =  require('./../server/db/mongoose.js');
 const {Todo} = require('./../server/models/todo.js');
 const {User} = require('./../server/models/user.js');

 var idTodo = '5c8cb1693b8fad1c397320a9';
 var idUser = '5c881326c7a8c27449a3dc8c';

if(!ObjectID.isValid(idTodo)){
  console.log('Todo Id not valid');
}
if(!ObjectID.isValid(idUser)){
  console.log('User Id not valid');
}
 // Todo.find({
 //   _id : id
 // }).then((todos) => {
 //   console.log('Todos',todos);
 // });
 //
 // Todo.findOne({
 //   _id : id
 // }).then((todo) => {
 //   console.log('Todo',todo);
 // });

Todo.findById(idTodo).then((todo) => {
  if(!todo)
    return console.log('Id not found');
  console.log('Todo',todo);
}).catch((e) => console.log(e));


User.findById(idUser).then((user) => {
  if(!user)
    return console.log('User not found');
  console.log('User',user);
}).catch((e) => console.log(e));
