import fs from 'node:fs'
import data from '../static/v50.json' with { type: 'json' }

const copy = process.argv[2]

if (!copy) {
  console.log('Please provide a copy')
  process.exit(1)
}

data.push(copy)

fs.writeFileSync('./static/v50.json', JSON.stringify(data, null, 2))
