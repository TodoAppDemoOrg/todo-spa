import express from 'express'
import fg from 'fast-glob'

function discoverRouters(): express.Router[] {
  const files = fg.sync(['**/*.backend.js'])
  return files.map((entry: string) => require('../../../' + entry.slice(0, -3)).default)
}

const app = express()
app.use(discoverRouters())
app.use(express.static('../build'))

const port = 8000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
