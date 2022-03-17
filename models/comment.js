// define the embedded 'child' schema
module.exports =  new mongoose.Schema({
  header: String,
  body: String,
  date: Date
})