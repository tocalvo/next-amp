const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    const router = express.Router()
    router.get('/', function (req, res) {
        res.json({ message: 'hooray! welcome to our api!' })
    })
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
    server.use('/api', router)
    server.use((req, res, next) => {
        console.log('res middleware', res.body)
        next()
    })

    server.get('/posts', async (req, res) => {
        console.log("Post url rendering")
        const response = await app.render(req, res, '/amp', { id: "Pritam" })
        console.log('posts response', response)
        console.log('body?', res.body)
        return response
    })

    server.get('*', async (req, res) => {
        const response = await handle(req, res)
        console.log('************ response', response)
        console.log('************ res', res.body)
        return response
    })



    server.listen(port, err => {
        if (err) throw err
        console.log(`🚀 Ready on http://localhost:${port} 🚀`)
    })
})