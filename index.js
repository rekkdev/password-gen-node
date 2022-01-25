const express = require('express');
const app = express();

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z','1', '2', '3', '4', '5', '6','7', '8', '9','!', '<', '>', '@','#','$','%', '&', '^','&','*','(', ')', '{', '}', '[', ']' , '\'','\\', ';', '\'', '"'] 


function generateRandomPassword(length) {
    var output = '';
    for (var i = 0; i < length; i++) {
        output += characters[getRandomNumberBetween(0,characters.length-1)]
    }
    return output;
}

app.get('/', (req, res)=>{
    res.send(`${generateRandomPassword(16)}`);
})

app.get('/:number', (req, res)=>{
    res.send(`${generateRandomPassword((Number)(req.params.number))}`);
})


app.listen(80);