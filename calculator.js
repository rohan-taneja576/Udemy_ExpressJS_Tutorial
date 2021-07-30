const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const port = process.env.port || 3000 

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    // res.send('Home Page')
    res.sendFile(__dirname + '/index.html')
})
app.post('/',(req,res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;
    res.send(`Result of calculation is ${result}`)
})

app.get('/bmicalculator',(req,res)=>{
    res.sendFile(__dirname + '/bmiCalculator.html')
})
app.post('/bmicalculator',(req,res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let result = weight / Math.pow(height,2);
    res.send(`Result of BMI calculation is ${result}`)
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`)
})