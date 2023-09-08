const mongoose = require('mongoose');



const connectDB = (url) => {
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            authSource: 'admin',
        });
}


module.exports = connectDB;

