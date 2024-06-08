const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname,'../judul.json')
const date = new Date();
const [hour, minute, second] = [date.getHours(), date.getMinutes(), date.getSeconds()];

exports.writeJsonJudul = (a) =>{
    let newJudul  = {judul:a}
    fs.writeFileSync(jsonPath,JSON.stringify(newJudul))
}

exports.readJsonJudul = () =>{
    let {judul} = JSON.parse(fs.readFileSync(jsonPath,'utf-8'))
    return judul
}

exports.timeNow = () => {
    return `${hour}:${minute}:${second}`
}