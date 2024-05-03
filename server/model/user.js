const { default: mongoose } = require("mongoose");

const userShema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const userFerdaws = mongoose.model('userFerdaws', userShemaShema);
module.exports = userFerdaws;




