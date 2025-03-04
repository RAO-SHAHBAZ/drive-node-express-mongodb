const express = require('express')
const router = express.Router();

router.get('/about',(req,res)=>{
    res.send("testign From Router Folder")
})

module.exports = router;