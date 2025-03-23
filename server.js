require('dotenv').config();
const express = require('express');
const flashcardController = require('./flashcardController');

const app = express();
app.use(express.json());

app.post('/generate-flashcards', flashcardController.generateFlashcards);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
