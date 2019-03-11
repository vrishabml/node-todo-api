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

  // db.collection('Todo').find({_id: new ObjectID('5c84dac92aa89902c0fdbd78')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) =>{
  //   console.log('Unable to fetch the record', err);
  // });

  db.collection('Todo').find({completed:true}).count().then((count) => {
    console.log(`Todos count : ${count}`);

  }, (err) =>{
    console.log('Unable to fetch the record', err);
  });
  //db.close();
});
