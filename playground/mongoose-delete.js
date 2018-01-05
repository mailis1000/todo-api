const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5a4f26121ead317fbcfaffb3'}).then((todo) => {

});

Todo.findByIdAndRemove('5a4f26121ead317fbcfaffb3').then((todo) => {
  console.log(todo)
});