const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sleepLogSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    hoursSlept: {
        type: Number,
    },
    quality: {
        type: Number,
    },
    comments: {
        type: String,
        required: true
    }
});

const SleepLog = mongoose.model('SleepLog', sleepLogSchema);
module.exports = SleepLog;

