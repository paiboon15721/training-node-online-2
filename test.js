const bcrypt = require('bcrypt')

const app = async () => {
  const hash = await bcrypt.hash('mypassword', 10)
  console.log(hash)

  const result = await bcrypt.compare('mypasswordd', hash)
  console.log(result)
}

app()
