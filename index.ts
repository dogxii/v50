import fs from 'node:fs'
import pangu from 'pangu'
import data from './static/v50.json' with { type: 'json' }

const unique = [...new Set(data)]
const spaced = unique.map(item => pangu.spacing(item))
const normalized = spaced.map(item => normalizeCopy(item))
const uniqueTwice = [...new Set(normalized)]
const sorted = uniqueTwice.sort((a, b) => a.length - b.length)

fs.writeFileSync('./static/v50.json', JSON.stringify(sorted, null, 2))

function normalizeCopy(copy: string) {
  return copy
    .replace(/\s+kfc\s+/gi, ' KFC ') // KFC
    .replace(/\r\n/g, '\n') // Normalize line endings
    .replace(/\\u([\d\w]{4})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16))) // Unicode
    .trim() // Trim
}
