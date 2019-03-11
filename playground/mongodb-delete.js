// var user = {name:'Vrishab',age:23};
// var {name} = user;
// var {age} = user;
// console.log(name + age);

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');

  db.collection('Todo').deleteMany({text:'eat lunch'}).then((result) => {
    console.log(result);
  });

  // db.collection('Todo').deleteOne({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todo').findOneAndDelete({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //db.close();
});
