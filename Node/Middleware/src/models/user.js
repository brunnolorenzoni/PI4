var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: String,
    password: String
}, {
    versionKey:false
}
);

module.exports = mongoose.model("User", UserSchema);