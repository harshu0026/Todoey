import express from "express";
import ejs from "ejs"

const app = express();
const port = 5500;

app.set('view engine', 'ejs');

app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.render("home");
});
app.get("/home", (req, res)=>{
    res.render("home");
});
app.get("/work", (req, res)=>{
    res.render("work");
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})