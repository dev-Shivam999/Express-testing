import express from 'express';

const app=express();

app.use(express.json())

app.post('/sum',(req, res) => {
    const a=req.body.a
    const b=req.body.b
    const result = a+b
    res.json(result)
})

app.listen(4000,() => {
    console.log("server listening on");
    
})