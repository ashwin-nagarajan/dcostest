var express = require('express');
var router = express.Router();




router.post('/', function(req, res, next) {


function random (low, high) {
    return Math.random() * (high - low) + low;
}
   

 var randomValue=random(10,12558899);

 console.log(randomValue + "  loging out message");

        res.status(200).json({
            success: true,

        });

});

module.exports = router;
