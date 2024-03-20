const path = require('path');
const express = require("express");
const morgan = require("morgan");
const {engine} = require("express-handlebars");
const app = express();
const port = 3000;

app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources/views'));

app.use(morgan('combined'));

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/menu',(req,res)=>{
    res.render('menu');
});

app.listen(port, () => (console.log(`Example running at http://localhost:${port}`)));

