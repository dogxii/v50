import fs from 'node:fs'
import data from '../static/v50.json' with { type: 'json' }

const copy = process.argv[2] || process.env.COPY_TEXT

if (!copy) {
  console.error('Please provide a copy via CLI argument or COPY_TEXT env var')
  process.exit(1)
}

data.push(copy)

fs.writeFileSync('./static/v50.json', JSON.stringify(data, null, 2))

await import('./format.ts')
