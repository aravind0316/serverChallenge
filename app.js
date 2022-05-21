const express = require('express'); 
const mongoose = require('mongoose');
const app = express();
const Posts = require('./models/Posts');
const bodyParser = require('body-parser');
const cors = require('cors');
const datas = [];

const startUp = async () => {
   await mongoose.connect('mongodb+srv://aravind-0316:Tamilselvi@cluster0.r2t8u.mongodb.net/?retryWrites=true&w=majority');
    console.log('connected to DB')


}


app.use(express.json())
app.use(cors());

app.get('/', async (req,res) => {
    try {
        const post =  await Posts.find()
        res.send(post)
     } catch (error) {
         res.json({message: error});
     } 
})

app.get('/posts', async (req,res) => {
    res.send('on posts')
        
})

app.get('/posts/:ID',(req,res) => {
    res.send('Hit');
});

// //connect to data base
// mongoose.connect('mongodb+srv://aravind-0316:Tamilselvi@cluster0.r2t8u.mongodb.net/?retryWrites=true&w=majority',
// {useNewUrlParser:true},() => console.log('connected to DB'));

//listen to server
app.listen(3001, () => {
    startUp();
});