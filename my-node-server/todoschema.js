const mongoose = require('mongoose')

const todo = mongoose.Schema({
    name : {
        type : String
    },
    status : {
        type : String
    }
})

const mytodo = new mongoose.model('/tododata',(todo))
module.exports = mytodo