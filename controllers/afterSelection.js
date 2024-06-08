const { notifPc, sendNotificationToPhone } = require('./sendNotif');
const { writeJsonJudul } = require('./writeFile');


exports.afterSelection = async (req, res) => {
    const { judul, desk, linknya } = req.body;

    
    try {
        console.log("afterSelection")
        const testingNotifPc = await notifPc({ judul, desk });
        const notifToPhone = await sendNotificationToPhone(judul, desk, linknya);
        console.log(testingNotifPc, notifToPhone);
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
