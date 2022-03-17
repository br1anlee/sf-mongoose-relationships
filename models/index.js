const mongoose = require('mongoose')

// connect to the db URI
mongoose.connect('mongodb://127.0.0.1/mongooseRelationships')
// grab the db connection
const db = mongoose.connection

// have some callback messages on connection or error
db.once('open', () => {
  console.log(`mongoose connected @ ${db.host}:${db.port} ⛓`)
})

db.on('error', error => {
  console.log('oh no! something has happened to the db! 😭')
  console.log(error)
})

console.log('hello from the models folder!')

// module.exports all the db models/collections
module.exports.BlogPost = require('./blog')
