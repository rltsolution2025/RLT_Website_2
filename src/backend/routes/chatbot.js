const express = require('express');
const router = express.Router();
const Conversation = require('../models/Convo');

router.post('/chatbot', async (req, res) => {
    console.log("📥 Chatbot request body:", req.body);
    
    const { name, phone, question, conversation } = req.body;
    
    try {
        // Save conversation
        const newConversation = new Conversation({ name, phone, question, conversation });
        await newConversation.save();
        console.log("✅ Conversation saved to database");
    
        // Respond to frontend
        res.status(201).json({ message: 'Conversation recorded successfully' });
        console.log("✅ Chatbot conversation recorded");
    
    } catch (error) {
        console.error("❌ Error recording chatbot conversation:", error);
        res.status(500).json({ error: 'Something went wrong while recording the conversation' });
    }
    });

module.exports = router;