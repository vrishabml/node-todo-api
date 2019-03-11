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

  // db.collection('Todo').insertOne({
  //   text:'Something to do',
  //   completed:false
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('todo').insertOne({
    name:'Vrishab',
    age:23,
    location:'Bengaluru'
  }, (err,result) => {
    if(err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
  })
  db.close();
});
