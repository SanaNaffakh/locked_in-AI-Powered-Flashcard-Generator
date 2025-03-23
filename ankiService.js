const axios = require('axios');

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

exports.addFlashcardsToDeck = async (deckName, flashcards) => {
  try {
    await axios.post(process.env.ANKI_CONNECT_URL, {
      action: 'createDeck',
      version: 6,
      params: { deck: deckName }
    });

    // Small delay to let Anki process the deck creation
    await sleep(500);

    const notes = flashcards.map(({ question, answer }) => ({
      deckName,
      modelName: 'Basic',
      fields: {
        Front: question,
        Back: answer
      },
      options: {
        allowDuplicate: false
      },
      tags: ['ollama']
    }));

    console.log('📝 Sending these notes to Anki:', JSON.stringify(notes, null, 2));

    const response = await axios.post(process.env.ANKI_CONNECT_URL, {
      action: 'addNotes',
      version: 6,
      params: { notes }
    });

    return response.data;
  } catch (error) {
    console.error('🧨 Error sending notes to Anki:', error.toJSON?.() || error);
    throw error;
  }
};
