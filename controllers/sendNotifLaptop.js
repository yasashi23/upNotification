const axios = require('axios');
const laptop = 'http://192.168.100.5:8000'


exports.notifLaptop = async (data) => {
    try {
        const response = await axios.get(`${laptop}/pcNotifGet`);
        console.log('PC Notification Response:', response.data);

        await sendNotificationToPc(data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

const sendNotificationToPc = async (data) => {
    try {
        const response = await axios.post(`${laptop}/pcNotif`, data);
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};


