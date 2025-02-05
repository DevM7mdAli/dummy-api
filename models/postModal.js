const Post = require('../data/posts.json')


const findAll = () => {
  return new Promise((res, rej) => {
    res(Post)
    rej("Error in getting data")
  })
}

const findByID = (id) => {
  return new Promise((res, rej) => {
    const post = Post.find((p) => p.id === Number(id))
    res(post)
    rej(`Error in getting data related to id: ${id}`)
  })
}

module.exports = {
  findAll,
  findByID
}