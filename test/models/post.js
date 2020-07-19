const { Post, User } = require('mongoose').models
const { assert } = require('chai')

const mockUser = {
  email: 'test@gmail.com',
  password: 'testpassword',
  name: 'test',
}

describe.only('Post', () => {
  it('Create post', async () => {
    const user = await User.create(mockUser)
    const post = await Post.create({
      title: 'mytile',
      detail: 'mydetail',
      user: user.id,
    })

    await Post.create({
      title: 'mytile2',
      detail: 'mydetail',
      user: user.id,
    })

    const posts = await Post.find().populate('user')
    // console.log(posts)
    assert.equal(true, true)

    const myuser = await User.findById(user.id).populate('posts')
    console.log(myuser.posts)
  })
})
