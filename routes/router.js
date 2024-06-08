const express =require('express')
const router = express.Router()
const {checkServer} = require('../controllers/checking')
const {data} = require('../controllers/fromWeb')
const {afterSelection} = require('../controllers/afterSelection')

router.get("/",checkServer)

router.post("/dataWeb",data,afterSelection)

module.exports = router
