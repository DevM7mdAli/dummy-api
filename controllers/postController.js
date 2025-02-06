const Post = require('../models/postModal')
const { getBody } = require('../utils')


//? @desc    Gets All posts
//! @route   /api/post
async function getPost(req, res) {
  try {
    const posts = await Post.findAll()
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify(posts))
  } catch (error) {
    res.writeHead(404, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ message: `Error in getting data ${error}` }))
  }
}

//? @desc    Insert a post
//! @route   /api/post
async function insertPostToDB(req, res) {
  try {
    const postData = await getBody(req)
    const post = await Post.insertPost(postData)
    res.writeHead(201, { 'content-type': 'application/json' })
    res.end(JSON.stringify(post))
  } catch (error) {
    res.writeHead(404, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ message: `Error in inserting data ${error}` }))
  }
}

//? @desc    Get one post
//! @route   /api/post/{id}
async function getSinglePost(req, res, id) {
  try {
    const post = await Post.findByID(id)
    if (!post) {
      res.writeHead(404, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ message: 'no post found' }))
    } else {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(post))
    }
  } catch (error) {
    console.log(error)
  }
}

//? @desc    Update one post
//! @route   /api/post/{id}
async function updateSinglePost(req, res, id) {
  try {
    const postData = await getBody(req)
    const post = await Post.updatePost(id, postData)
    if (!post) {
      res.writeHead(404, { 'content-type': 'application/json' })
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
  getSinglePost,
  insertPostToDB,
  updateSinglePost
}

