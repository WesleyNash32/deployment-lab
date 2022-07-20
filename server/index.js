const express = require('express')
const path = require('path')

const app = express()

const port = 4005

app.listen(port, () => {
    console.log(`Server is docked at 4005`)
})