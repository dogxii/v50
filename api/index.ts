import v50 from '../static/v50.json' with { type: 'json' }

const options = { port: 8080, hostname: 'localhost' }
Deno.serve(options, () => new Response(v50.at(Math.floor(Math.random() * v50.length))))
