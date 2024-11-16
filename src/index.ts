
import express from 'express';
import { client } from './db';

export const app=express();

app.use(express.json())


app.post('/sum',async(req, res) => {
    const a=req.body.a
    const b=req.body.b
    const result = a+b
    await client.request.create({
        data:{
            a,b,
            c:a+b,
            type:'sum'
        }
    })
    res.json({sum:result})
})
app.post('/multi',async(req, res) => {
    const a=req.body.a
    const b=req.body.b
    const result = a*b
    await client.request.create({
        data: {
            a, b,
            c: a * b,
            type: 'multi'
        }
    })
    res.json({sum:result})
})

