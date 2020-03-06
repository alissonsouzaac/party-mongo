const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
   id_party : {ContactSchema.length + 1},
   name_party : { type: String, require: true},
   date_party : { type: String, require: true},
   price_party : {type: String, require: true},
   local_party : { type: String, require: true},
   cidade_party : { type: String, require: true}
});

module.exports = mongoose.model('Contact',ContactSchema);
