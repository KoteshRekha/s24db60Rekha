const mongoose = require("mongoose")
const jacketSchema = mongoose.Schema({
jacket_name: String,
cloth: {
    type: String,
    minlength: 1,
    maxlength: 15,
},
cost: {
    type: Number,
    min: 1,
    max: 500,

}
})
module.exports = mongoose.model("jacket",
jacketSchema)
