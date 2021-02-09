const express= require("express");
const app= express();
const hbs= require("hbs");
const path= require("path");


const tempaletpath=path.join(__dirname,"../Templates/Views");
const staticPath=(path.join(__dirname,"../Public"));
const partialsPath=path.join(__dirname,"../Templates/Partials");

const port= process.env.PORT || 3000;

app.set("view engine","hbs");
app.set("views",tempaletpath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render("Index");
});
app.get("/about",(req,res)=>{
    res.render("About");
});
app.get("/weather",(req,res)=>{
    res.render("Weather");
});
app.get("*",(req,res)=>{
    res.render("Error",{
        errorMSG: "Oops Page Not Found"
    });
});
app.listen(port,()=>{
    console.log(`Listening to server ${port}`);
});