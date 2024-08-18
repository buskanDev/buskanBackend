import express from 'express'

const port = process.env.PORT || 80

const app = express()

app.get('/',(req,res)=>{
    return res.send("App started")
})

app.listen(port,()=>{
    console.log(`App is listening on http://localhost:${port}`);
})