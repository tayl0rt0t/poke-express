const express = require('express');
const jsxEngine = require('jsx-view-engine');


const app = express ();
const port = 3000;

app.set('view engine', 'jsx');
app.engine(jsx,jsxEngine());



app.get('/',(req,res)=> {
    res.send('working')
})

app.listen(port,()=> {
    console.log(`listening on port ${port}`)
})