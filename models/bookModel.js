const mongoose=require('mongoose');
const { model } = require('mongoose');
const db_link=require('../secrets');
mongoose.connect(db_link)
.then(function(db){
    console.log('db is connected');
})
.catch(function(err){
    console.log(err);
})

const bookSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true
    },
    Publisher:{
        type:String,
        required:true
    },
    language:{
        type:String,
        require:true
    }

});

const bookModel=mongoose.model('bookModel',bookSchema);

module.exports=bookModel;