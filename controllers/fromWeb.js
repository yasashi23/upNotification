const { checkingAllData } = require('./checking');
const { readJsonJudul,timeNow } = require('./writeFile');

exports.data = async (req, res, next) => {
    const { Skill, negara, paymentnya, spendnya, judul, ...dataBody } = req.body;

    const resultChecking = checkingAllData(Skill, negara, paymentnya, spendnya);
    const queueSendNotif = readJsonJudul(); // Karena queueSend synchronous, tidak perlu await
    
    if (resultChecking) {
        if(queueSendNotif !== judul){
            console.log("berhasil",judul,timeNow());
            next();
        }else{
            res.json({response:"masih sama"})
        }
    } else {
        console.log("gagal",judul,timeNow());
        res.json({
            response: "gagal"
        });
    }
};
