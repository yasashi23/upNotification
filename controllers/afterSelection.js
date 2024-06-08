const { notifPc, sendNotificationToPhone } = require('./sendNotif');
const { notifLaptop} = require('./sendNotifLaptop');
const { writeJsonJudul } = require('./writeFile');


exports.afterSelection = async (req, res) => {
    const { judul, desk, linknya } = req.body;

    
    try {
        console.log("afterSelection")
        const testingNotifPc = await notifPc({ judul, desk });
        const notifToPhone = await sendNotificationToPhone(judul, desk, linknya);
        const notifToLaptop = await notifLaptop({judul,desk})
        console.log(testingNotifPc, notifToPhone,notifToLaptop);
        writeJsonJudul(judul)
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
