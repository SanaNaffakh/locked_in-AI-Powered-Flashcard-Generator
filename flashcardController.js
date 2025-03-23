const ollamaService = require('./ollamaService');
const ankiService = require('./ankiService');

exports.generateFlashcards = async (req, res) => {
  try {
    const { inputText, deckName } = req.body;
    const flashcards = await ollamaService.generateFlashcards(inputText);

    const result = await ankiService.addFlashcardsToDeck(deckName, flashcards);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
