
var express=require('express');
var app=express();

const mongoose =require("mongoose");


app.get('/re',(request,response)=>{
  

const http = require("https");

const options = {
	"method": "GET",
	"hostname": "covid-193.p.rapidapi.com",
	"port": null,
	"path": "/statistics",
	"headers": {
		"x-rapidapi-key": "970d0c38d3msh10f7218624f2f9ep1772dbjsnbcfbe4ea4db2",
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
    res.send(body.toString());
  });
});

    response.send("hb");

req.end();

})



mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 
let newSchema=new mongoose.Schema({
  name:String,
  date:String,
  day:Number,
  about:String
});

let New = mongoose.model('New',newSchema);



app.get('/',(req,res)=>{
  let hello=New({
  name:req.headers['user-agent'],
    date:new Date().toUTCString(),
    day:new Date().getDate(),
    about:"1"
  })
  //hello.find({});
  //hello.remove({day:29});
  //hello.save();
  //console.log();
  res.sendFile(__dirname+"/index.html");
})

app.get('/v',(req,res)=>{
  var ip = req.headers['x-forwarded-for'];
  res.send(req.headers['user-agent']+ip+new Date().getDate());

})

app.get('/ch1',(req,res)=>{
   let hello=New({
  name:req.headers['user-agent'],
    date:new Date().toUTCString(),
    day:new Date().getDate(),
     about:"ch1"
  })
  hello.save();
  res.sendFile(__dirname+"/chart.html");
})

app.get('/ch2',(req,res)=>{
   let hello=New({
  name:req.headers['user-agent'],
    date:new Date().toUTCString(),
    day:new Date().getDate(),
     about:"ch2"
  })
  hello.save();
  res.sendFile(__dirname+"/ch.html");
})

app.get('/choosie',(req,res)=>{
  
  let hello=New({
  name:req.headers['user-agent'],
    date:new Date().toUTCString(),
    day:new Date().getDate(),
    about:"choosie"
  })
  hello.save();
  res.sendFile(__dirname+"/choosie.html");
})

app.get('/php.html',(req,res)=>{
  res.sendFile(__dirname+"/php.html")
})

app.get('/d',(req,res)=>{
 // res.download(__dirname+"/ff.css");
res.redirect("https://www.facebook.com");
})

app.listen(process.env.PORT|| 3000,function(){
  console.log("Listening on port " + process.env.PORT);
})

module.exports=app;
