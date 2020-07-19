const { assert } = require('chai')
const { User } = require('mongoose').models

const mockUser = {
  email: 'test@gmail.com',
  password: 'testpassword',
  name: 'test',
}

describe('User', () => {
  it('Create user by helper function', async () => {
    await User.create(mockUser)
    const users = await User.find()
    assert.equal(users.length, 1)
  })

  it('Create user by constructor', async () => {
    const user = new User(mockUser)
    await user.save()
    const users = await User.find()
    assert.equal(users.length, 1)
  })

  it('Update user', async () => {
    const user = new User(mockUser)
    await user.save()
    const newUser = await User.findByIdAndUpdate(
      user._id,
      {
        password: 'editpassword',
        name: 'edited name',
      },
      { new: true },
    )
    assert.equal(newUser.name, 'edited name')
  })
})
