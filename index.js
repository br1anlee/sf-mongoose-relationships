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
      body: 'you should really try mongoose, it is the best!'
    }
    // upsert = update OR insert (basically find or create) but its update or create
    const newBlog = await db.BlogPost.findOneAndUpdate(filter, blog, { upsert: true })
    // console.log(newBlog)
    // CREATE -- push a new subdoc to the array of subdocs
    newBlog.comments.push({
      header: 'om gosh, so true',
      body: 'i love mongoose too, its so easy to just push to a subdocument array!',
      date: new Date()
    }) 
    // save the paraent after you pushed to the subdoc array
    await newBlog.save()

    // READ (when you read the parent -- you get all the sub docs)
    // find subbdoc by id
    const foundComment = newBlog.comments.id("6233bc275d14225e227d49ae")
    // console.log(foundComment)
    // UPDATE 
    // change fields of the subdoc
    foundComment.body += '🌈✅'
    // save the parent
    await newBlog.save()
    // DESTROY -- invoke the .remove() method on an subdoc and then save the parent
    // remove the second comment
    newBlog.comments[1].remove()
    foundComment.remove() // goodbye emjoi one
    // save the parent
    await newBlog.save()
  } catch (err) {
    console.log(err)
  }
}

// commentCrud()

const userCrud = async () => {
  try {
    // // create a user
    // const newUser = await db.User.create({
    //   name: 'Weston',
    //   email: 'weston@weston.com'
    // })
    // // finda blog
    // const newBlog = await db.BlogPost.create({
    //   title: 'woot woot lovin the mongoose',
    //   body: 'oops i mae the body as the title'
    // })

    // // add the user to the blog
    // newBlog.blogger = newUser
    // // add the blog the user
    // newUser.blogs.push(newBlog)

    // // save everything 
    // await newBlog.save()
    // await newUser.save()

    // read
    // FIND A USER  or BLORG
    const foundBlog = await db.BlogPost.findById("6233c59c1071eb3ee2ec8177").populate('blogger')
    foundBlog.comments.push({
      header: 'sick blogpost, broham',
      body: 'really nice contet',
      date: new Date()
    })
    await foundBlog.save()
    console.log(foundBlog)
    // simple populate
    // const foundUser = await db.User.findOne({ name: 'Weston' }).populate('blogs') // simple population of refs
    // console.log(foundUser)
    // const foundUser = await db.User.findOne({ name: 'Weston' }).populate({
    //   path: 'blogs',
    //   populate: {
    //     path: 'blogger'
    //   }
    // }) // simple population of refs
    // console.log(foundUser)
    // mongoose does not suppoert update or or destroy with specials
    //  UPDATE
    // modify the refernce array
    // save the instance
    // DESTROY
    // modify the refernce array -- use .filter to remove it
    // save the instance 
  } catch (err) {

  }
}

userCrud()