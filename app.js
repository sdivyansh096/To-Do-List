const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items=[];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(reqton,res){
    var today= new Date();
    var currentDay = today.getDay();
    var options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day =today.toLocaleDateString("en-US",options);
    // var day ="";

//     if(currentDay===1){
//         day="Monday";
//     }
//    else if(currentDay===2){
//         day="Tuesday";
//     }
//     else if(currentDay===3){
//         day="Wednessday";
//     }
//    else if(currentDay===4){
//         day="Thrusday";
//     }
//    else if(currentDay===5){
//         day="Friday";
//     }
//     else if(currentDay===6){
//         day="Saturday";
//     }
//     else{
//         day = "Sunday";
//     }
    res.render("List",{kindOfDay: day , newListItems: items});
    
});
app.post("/",function(req,res){
   var item =req.body.newItem;
   
   // console.log(item);
    items.push(item);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("port is running on localhost 3000.");
})