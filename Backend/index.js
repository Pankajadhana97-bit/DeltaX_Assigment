const express = require("express");
const mongoose= require("mongoose");
const app =express();
const http = require("http");
const artistRoute = require("./Routes/artist");
const songRoute = require("./Routes/songs");
const userRoute = require("./Routes/user")
const bodyparser = require("body-parser");
const cors = require("cors");
const port=process.env.PORT || 8080;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());


mongoose.connect("mongodb+srv://karunesh:qwerty123456@cluster0.hb1isfh.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(console.log("connected")).catch(err=>console.log(err))
app.use("/new",artistRoute);
app.use("/api",songRoute)
app.use("/user",userRoute)



const server =http.createServer(app);

server.listen(port ,
    console.log("listening on 8080")
)