const mongoose = require('mongoose')

// define the embedded 'child' schema
const commentSchema = new mongoose.Schema({
  header: String,
  body: String,
  date: Date
})

// embed it in the 'parent' schema
const blogPostSchema = new mongoose.Schema({
  title: String,
  body: String,
  // 1 blog has many comments 1:M
  comments: [commentSchema]
})

// both schemas are modelified here
module.exports = mongoose.model('BlogPost', blogPostSchema) // turn the schemas into a model and export it