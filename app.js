const express=require('express');
const app=express();
const bookRouter=require('./routers/bookRoute');
app.use(express.json());
app.listen(3000);

console.log("server is running");
app.use('/book',bookRouter);