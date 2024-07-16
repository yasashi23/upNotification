const { notifPc, sendNotificationToPhone,sendNotificationToPhone2 } = require('./sendNotif');
const { notifLaptop} = require('./sendNotifLaptop');
const { writeJsonJudul,writeJsonNomor,readJsonNomor, readJsonJudul } = require('./writeFile');


exports.afterSelection = async (req, res) => {
    const { judul, desk, linknya } = req.body;
    let jsonNumber = readJsonNomor() + 1
    const judulWithNum = `No: ${jsonNumber}. ${judul}`
    console.log(judulWithNum)

    
    try {
        console.log("afterSelection")
        const testingNotifPc = await notifPc({ judul:judulWithNum, desk });
        const notifToPhone = await sendNotificationToPhone(judulWithNum, desk, linknya);
        const notifToPhone2 = await sendNotificationToPhone2(judulWithNum, desk, linknya);
        const notifToLaptop = await notifLaptop({judulWithNum,desk})
        console.log({testingNotifPc, notifToPhone,notifToLaptop,notifToPhone2});
        writeJsonJudul(judul)
        writeJsonNomor(jsonNumber)
        res.json({
            response: "notifikasi berhasil dikirim",
            pcNotification: testingNotifPc,
            phoneNotification: notifToPhone
        });
        

    } catch (error) {
        console.error('Error:', error);
        res.json({ response: "terjadi kesalahan" });
    }
};
