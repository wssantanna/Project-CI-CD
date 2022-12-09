
const express = require('express');
const calc = require('./calc');

const app = express();

app.use(express.json());

app.get('/somar/:value/:value2', (req, res) => {
    const { value, value2 } = req.params;
    res.json({
        result: calc.sum(parseFloat(value), parseFloat(value2))
    });
});

app.get('/subtrair/:value/:value2', (req, res) => {
    const { value, value2 } = req.params;
    res.json({
        result: calc.subtract(parseFloat(value), parseFloat(value2))
    });
});

app.get('/multiplicar/:value/:value2', (req, res) => {
    const { value, value2 } = req.params;
    console.log(value, value2)
    res.json({
        result: calc.multiple(parseFloat(value), parseFloat(value2))
    });
});

app.listen(3000, () => console.log('Server is running'));