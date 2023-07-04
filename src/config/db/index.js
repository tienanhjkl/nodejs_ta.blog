const mongoose = require('mongoose');

async function connect (){

    try {
        await mongoose.connect('mongodb://127.0.0.1/TA_blog');
        console.log('Connect Successfully!');
    } catch (error) {
        console.log('Connect to DB Fail!');
        console.log(error)
    }

}

module.exports = { connect };
