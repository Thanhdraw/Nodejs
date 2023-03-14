const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/Education_dev');
        console.log('connect successfully!!!');

    } 
    catch (error) {
    console.log('connect successfully');
        
    }

}

module.exports = { connect };