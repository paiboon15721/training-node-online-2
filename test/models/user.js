const { assert } = require('chai')
const { User } = require('mongoose').models

describe('User', () => {
  it('Create user', async () => {
    await User.create({
      email: 'test@gmail.com',
      password: 'testpassword',
      name: 'test',
    })
    const users = await User.find()
    console.log(users)
  })

  it('Delete user', async () => {
    assert.equal(true, true)
  })
})
