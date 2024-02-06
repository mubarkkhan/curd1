const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyparser = require("body-parser")
const mytodo = require("./todoschema")
const server = express()
const port = 8000

server.use(bodyparser.json())

mongoose.connect('mongodb://localhost:27017/todo-list', {
    family: 4
})
    .then(() => {
        console.log('database is connected')
    })
    .catch((e) => {
        console.log(e, 'error')
    })

server.use(cors())

server.post('/tdata',async (req, res) => {
    try {
        const data = new mytodo()
            data.name = req.body.name
            data.status = req.body.status
            const document = await data.save()
        if (document) {
            res.status(200).json({
                document: document,
                status: true,
                message: 'task created'
            })
        }
        else {
            res.status(404).json({
                status: false,
                message: 'something went wrong'
            })
        }
    }
    catch (e) {
        console.log(e, 'error')
    }
})

server.get('/gettdata',async(req,res)=>{
    const data = await mytodo.find()
    res.send(data);
});

server.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id
    const data = await mytodo.findByIdAndDelete(id)
    if(data){
        res.status(200).json({
            data : data,
            status : true,
            message : 'Task delete successfully'
        })
    }
    else{
        res.status(404).json({
            status : false,
            message : 'something went wrong'
        })
    }
    }
    catch(e){
        console.log(e,'error')
    }
})

server.get('/editget/:id',async(req,res)=>{
    const id = req.params.id
    const data = await mytodo.findOne({_id : id})
    res.json({'edit' : data})
})

server.patch('/edit/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const data = await mytodo.findByIdAndUpdate(id,req.body)
        res.json(req.body)
        if(data){
            res.status(200).json({
                data : data,
                status : true,
                message : 'Task edit successfully'
            })
        }
        else{
            res.status(404).json({
                status : false,
                message : 'something went wrong'
            })
        }
    }
    catch(e){
        console.log(e,'error')
    }
})

server.listen(port, (req, res) => {
    try {
        console.log(port, "success")
    }
    catch (e) {
        console.log(e, 'error')
    }
})