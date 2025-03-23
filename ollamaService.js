const axios = require('axios');

exports.generateFlashcards = async (inputText) => {
  const prompt = `
Create concise flashcards from the following content. Your response MUST be only valid JSON in this format:
[
  { "question": "Q1", "answer": "A1" },
  { "question": "Q2", "answer": "A2" }
]
Do NOT include any explanations, markdown, or extra text.

Content:
"""${inputText}"""
`;

  const response = await axios.post(`${process.env.OLLAMA_BASE_URL}/api/generate`, {
    model: process.env.OLLAMA_MODEL,
    prompt,
    stream: false
  });

  const raw = response.data.response.trim();

  // Make sure it's parsable
  console.log('Ollama raw response:', raw);

  const parsed = JSON.parse(raw);
  return parsed;
};
