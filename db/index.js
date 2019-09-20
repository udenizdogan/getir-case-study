const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect("mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study", { useNewUrlParser: true, useCreateIndex: true })
        .then(() => {
            console.log('DB connection successful')
        })
        .catch(err => {
            console.log('An error occured | ' + err)
        })
}