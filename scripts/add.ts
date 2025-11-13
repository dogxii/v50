import fs from 'node:fs'
import data from '../static/v50.json' with { type: 'json' }

const copy = process.argv[2]

if (!copy) {
  console.error('Please provide a copy')
  process.exit(1)
}

data.push(copy)

fs.writeFileSync('./static/v50.json', JSON.stringify(data, null, 2))

await import('./format.ts')
