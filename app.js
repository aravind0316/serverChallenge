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
app.post('/plan', async (req,res) => {
    try {
        if(req.body.plan && req.body.renue && req.body.status){
            const post =  await Posts.find({plan: req.body.plan, status: req.body.status,renue:req.body.renue})
            res.send(post)
        }else if(req.body.plan && req.body.status){
            const post =  await Posts.find({plan: req.body.plan, status: req.body.status})
            res.send(post)
        }else if(req.body.plan && req.body.renue){
            const post =  await Posts.find({plan: req.body.plan, renue:req.body.renue})
            res.send(post)
        }else if(req.body.status && req.body.renue){
            const post =  await Posts.find({status: req.body.status,renue:req.body.renue})
            res.send(post)
        }else if(req.body.plan){
            const post =  await Posts.find({plan: req.body.plan})
            res.send(post)
        }else if (req.body.status){
            const post =  await Posts.find({status: req.body.status})
            res.send(post)
        }else{
            const post =  await Posts.find({renue:req.body.renue})
            res.send(post)
        }

     } catch (error) {
         res.json({message: error});
     } 
})
app.post('/', async (req,res) => {
   const post = await Posts.create(req.body)

   res.send(post);
        
})

app.get('/posts/:ID',(req,res) => {

    res.send(req.body.name);
});


//listen to server
app.listen(3001, () => {
    startUp();
});