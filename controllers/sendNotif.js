const axios = require('axios');
const a71 = 'k-1df62120bdfe';
const a20 = 'k-55ac4ad0606d'; //diganti dulu
const pc = 'http://192.168.100.18:8000'


exports.notifPc = async (data) => {
    try {
        const response = await axios.get(`${pc}/pcNotifGet`);
        console.log('PC Notification Response:', response.data);

        await sendNotificationToPc(data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

const sendNotificationToPc = async (data) => {
    try {
        const response = await axios.post(`${pc}/pcNotif`, data);
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

exports.sendNotificationToPhone = async (t, c, u) => {
    try {
        const url2 = 'http://xdroid.net/api/message?k=' + a71;
        const data = { t, c, u };
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const res2 = await axios.post(url2, data, config);
        console.log('Respons', res2.data);
        return res2.data;
    } catch (err) {
        console.error(err.message);
    }
};

exports.sendNotificationToPhone2 = async (t, c, u) => {
    try {
        const url2 = 'http://xdroid.net/api/message?k=' + a20;
        const data = { t, c, u };
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const res2 = await axios.post(url2, data, config);
        console.log('Respons', res2.data);
        return res2.data;
    } catch (err) {
        console.error(err.message);
    }
};

// Jangan lupa untuk menjalankan server FastAPI dengan uvicorn server:app --reload
