const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userid: { type: String },
    blacklisted: { type: Boolean, default: false },
    permissions: { type: Number, default: 0 }
})

module.exports = model('User', UserSchema)