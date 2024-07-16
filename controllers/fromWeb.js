const { checkingAllData } = require('./checking');
const { readJsonJudul,readJsonNomor,timeNow } = require('./writeFile');

exports.data = async (req, res, next) => {
    const { Skill, negara, paymentnya, spendnya, judul, ...dataBody } = req.body;

    const resultChecking = checkingAllData(Skill, negara, paymentnya, spendnya);
    const queueSendNotif = readJsonJudul(); 
    // const jsonNumber = readJsonNomor()
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
