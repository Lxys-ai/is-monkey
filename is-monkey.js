function isMonkey(val) {
    return (val === 'monkey'); //returns if string is 'monkey' or not
  };  

const express = require('express')
const bodyParser = require('body-parser');
const { kill } = require('process');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/monkey', (req, res) => {
    res.send(isMonkey(req.body.val))
})

app.listen(3000, () => console.log('started'))