const express = require ('express')
const app = express()

app.get('/greeting',(req,res)=>{
    (res.send('hello Stranger'))
})
// app.send('3000',(req,res {
//     console.log('we are in sever.js')
// })//
// 
app.get('/greeting/:name',(req,res)=>{
     (res.send(`Whatsup  ${req.params.name} so great to see you`))
 })

app.get('/greeting/Jimmy-boy',(req,res)=>{
res.send('Wow! Hello there, Jimmy-boy')
})
app.listen(3000,()=>{
    console.log('listening to port 3000')
})