
var {mongoose} = require('mongoose');


async function connectToDB (){
    try {
        var mongoDB = 'mongodb://127.0.0.1:27017/Todo_list';
        await mongoose.connect(mongoDB, { useNewUrlParser: true });
        console.log("mongodb connected successfully")
    }catch(error){
        console.log(error)
    }
}
module.exports = connectToDB

