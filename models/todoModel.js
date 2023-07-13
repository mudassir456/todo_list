const {Schema, model} = require("mongoose")

let schema = new Schema({
    todo :{
        type : String,
        required : true
    }
})

module.exports = model("Todo",schema)