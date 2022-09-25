const mongoose=require('mongoose');
const db_link='';
mongoose.connect(db_link)
.then(function(db){
    console.log('db is connected');
})
.catch(function(err){
    console.log(err);
})
