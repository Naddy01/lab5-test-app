const express = require('express')
const app = express()
app.get('/', (req, res)=>{
    res.send('you just created a container out of your app')
})
app.listen(3000)
