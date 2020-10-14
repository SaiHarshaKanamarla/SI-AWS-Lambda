var express = require('express');
const axios = require('axios');
var app = express();

const port = 3000;

app.get('/say',(req,res)=>{    
    console.log(req.query.keyword);
    const url = 'https://00sz2et9vc.execute-api.us-east-1.amazonaws.com/v1/say'+'?keyword='+req.query.keyword;
    console.log(url);
    axios.get(url)
        .then((response) => {
            res.send(response.data.body);            
        }).catch(function(error){
            console.log(error);
        })
});

app.listen(port);


