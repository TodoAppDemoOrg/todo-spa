import express from 'express'
import glob from 'fast-glob'

function discoverRouters(patterns: string[]): express.Router[] {
  const files = glob.sync(patterns, {absolute: true})
  const modules = files.map(filename => require(filename.replace('.js', '')))
  return modules.map(module => module.default)
}

const app = express()
app.use(discoverRouters(['**/*.backend.js']))
app.use(express.static('../build'))

const port = 8000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
