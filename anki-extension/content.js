// function addGenerateButton() {
//   if (document.getElementById('generate-flashcards-btn')) return;

//   const btn = document.createElement('button');
//   btn.innerText = 'Generate Flashcards';
//   btn.id = 'generate-flashcards-btn';

//   Object.assign(btn.style, {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     zIndex: 9999,
//     padding: '12px 16px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
//   });

//   btn.onclick = async () => {
//     btn.disabled = true;
//     btn.innerText = 'Generating...';

//     const bodyText = document.body.innerText.slice(0, 3000); // Truncate to avoid overload

//     try {
//       const response = await fetch('http://localhost:3000/generate-flashcards', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           inputText: bodyText,
//           deckName: 'WebFlashcards'
//         })
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert('✅ Flashcards added to Anki!');
//       } else {
//         alert('❌ Failed to add flashcards: ' + data.error);
//       }
//     } catch (err) {
//       alert('🚫 Could not connect to server. Is it running?');
//       console.error(err);
//     }

//     btn.disabled = false;
//     btn.innerText = 'Generate Flashcards';
//   };

//   document.body.appendChild(btn);
// }

// addGenerateButton();
