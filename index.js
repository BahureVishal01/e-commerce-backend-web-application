const express=require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const apiRouter = require("./routes/api");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Hello world');
});


app.use('/api', apiRouter);
app.listen(process.env.PORT ||port, () =>{
    console.log("server is started successfully");
}); 