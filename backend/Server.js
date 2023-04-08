const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/getData',(req,res)=>{
    res.send("hello, here I am!")
})

app.listen(5000, ()=>{
    console.log('listening..')
})

