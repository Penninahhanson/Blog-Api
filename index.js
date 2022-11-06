const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const bodyParser = require('body-parser')


const getPostController = require('./controllers/getPostByIdControl')
const PostController = require('./controllers/PostControl')
const homeController = require('./controllers/homeBlog')
const storePostController = require('./controllers/storePostControl')


const { checkUser } = require("./middlewares/authentication");

const authRoutes = require("./route/authUserRoute");
const cookieParser = require("cookie-parser");

//constants from config folder
const { PORT,DB } = require("./config");


// Initialize the application
const app = express()

// setting the templating engine 
app.set('view engine','ejs')

// middleware to access static flies
app.use(express.static('public'))

app.use(cookieParser());

app.use(express.json());

// middleware to parser body 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//middleware for auth
app.use('/signup', authRoutes);


// Getting routes

app.get('/auth/register',(req,res)=>{
  res.render('register')
})
app.get('/auth/login',(req,res)=>{
  res.render('login')
})

app.get("/",homeController)

app.get("/post/:id", getPostController)

app.get("/posts/new",checkUser,PostController)
  
app.post("/posts/store",storePostController)

  

// Connecting to database 
mongoose.connect(DB,{useNewUrlParser:true})

 //Listenting to server on PORT
 app.listen(PORT, () =>{ console.log(`message:Server started on http://localhost:${PORT}`)}
 );




