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

  db.collection('Todo').findOneAndUpdate({
    _id : new ObjectID('5c85e93d2f757d72ab7d6c70')
  },{
    $set: {completed:false}
  }, {
    returnOriginal:false
  }).then((res) => {
    console.log(res);
  })
  //db.close();
});
