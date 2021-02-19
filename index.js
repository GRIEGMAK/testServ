const express = require('express')
const config = require('config')

const app = express()

const PORT = config.get('port') || 4000

async function start(){
    try{
        app.listen(PORT, () => {
            console.log(`server is listening on port: ${PORT}`)
        })
    }catch (e) {
        console.log('Server give us error', e.message)
        process.exit(1)
    }
}

start()