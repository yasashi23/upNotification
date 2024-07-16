const express =require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port =  3001
const {notifPc} = require('./controllers/sendNotif')



app.use(cors())
app.use(bodyParser.json());

app.use("/",require('./routes/router'))




app.listen(port, ()=>{
    console.log("running",port)
})