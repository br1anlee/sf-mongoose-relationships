const db = require('./models')

const commentCrud = async () => {
  try {
    // make a new blog to add comments to
    // upsert a blog!
    // filter - to match
    const filter = {
      title: 'I love mongoose 🖤'
    }
    // data to insert
    const blog = {
      body: 'you should really try mongoose, it is the best! '
    }
    const newBlog = await db.BlogPost.findByIdAndUpdate()
    // CREATE 

    // READ 

    // UPDATE 

    // DESTROY
  } catch (err) {
    console.log(err)
  }
}

commentCrud()