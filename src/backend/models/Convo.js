const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
     name: String,
     phone: String,
     question: String,
     conversation: Array,
     timestamp: { type: Date, default: Date.now }
   });

module.exports = mongoose.model('Conversation', ConversationSchema);
