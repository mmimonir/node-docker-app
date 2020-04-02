const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({ host: 'redis-server', port: 6379 })
client.set('visits', 0)

app.get('/', (req, res) => {
  // res.status(200).send('Hi There')
  client.get('visits', (err, visits) => {
    res.status(200).send('Number of Visits are =', visits)
    client.set('visits', parseInt(visits) + 1)
  })
})

app.listen(8081, () => {
  console.log('Listning on Port 8081')
})
