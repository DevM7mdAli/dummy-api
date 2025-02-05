const Post = require('../models/postModal')


//? @desc    Gets All posts
//! @route   /api/post
async function getPost(req, res) {
  try {
    const posts = await Post.findAll()
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify(posts))
  } catch (error) {
    console.log(error)
  }
}

//? @desc    Get one post
//! @route   /api/post/{id}
async function getSinglePost(req, res, id) {
  try {
    const post = await Post.findByID(id)
    if (!post) {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ message: 'no post found' }))
    } else {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(post))
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getPost,
  getSinglePost
}

