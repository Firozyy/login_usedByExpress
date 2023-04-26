const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname+"/public")));
app.use(session({
    secret: "Mytestsecret",
    name: "Mysite",
    saveUninitialized: true,
    resave: false,

}));
const users = [
    { username: 'muhasin', password: 'Muhasin@123' },
    { username: 'feroz', password: 'Feroz@123' },
]

app.get('/', (req, res) => {
    if (req.session.isAuth) {
        res.send(__dirname + '/public/login_success.html');
    }
    else {
        res.sendFile(__dirname + '/public/index2.html');
    }


})

app.post('/login', (req, res) => {

    const { username, password } = req.body;

    const registeredUser = users.find( (user) => user.username === username && user.password === password);

    if(!registeredUser){
        res.send("Invalid user");
    }else{
        req.session.userid = req.body.username;
        req.session.isAuth = true;
     
        res.sendFile(__dirname + "/profile.html");
    }

    
})

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.sendFile(__dirname + "/login.html");
})






app.listen(3000, () => console.log("3000 is up"))