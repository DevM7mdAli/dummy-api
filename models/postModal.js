const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: false
  }
}, { timestamps: true, collection: 'post' })

const Post = mongoose.model('test', postSchema)

const findAll = async () => {
  try {
    const posts = await Post.find().exec()
    return posts
  } catch (err) {
    console.error(err)
  }
}

const findByID = async (id) => {
  try {
    const post = await Post.findOne({ id: Number(id) }).exec()
    return post
  } catch (error) {
    console.error(error)
  }
}

const insertPost = async (post) => {
  try {
    const newPost = new Post(post)
    await newPost.save()
    return newPost
  } catch (error) {
    console.error(error)
  }
}

const updatePost = async (id, updatedData) => {
  try {
    const updatedPost = await Post.findOneAndUpdate({ id: Number(id) }, updatedData, { new: true }).exec()
    return updatedPost
  } catch (error) {
    console.error(error)
  }
}

const deletePost = async (id) => {
  try {
    await Post.findOneAndDelete({ id: Number(id) }).exec()
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  findAll,
  findByID,
  insertPost,
  updatePost,
  deletePost,
  Post
}