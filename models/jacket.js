const mongoose = require("mongoose")
const jacketSchema = mongoose.Schema({
jacket_name: String,
cloth: String,
cost: Number
})
module.exports = mongoose.model("jacket",
jacketSchema)
