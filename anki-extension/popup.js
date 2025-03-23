document.getElementById("generateBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: async () => {
      const bodyText = document.body.innerText.slice(0, 3000); // limit for performance
      try {
        const res = await fetch("http://localhost:3000/generate-flashcards", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            inputText: bodyText,
            deckName: "WebFlashcards"
          })
        });

        const data = await res.json();
        if (data.success) {
          alert("✅ Flashcards added to Anki!");
        } else {
          alert("❌ Failed: " + data.error);
        }
      } catch (err) {
        alert("🚫 Could not connect to local server.");
        console.error(err);
      }
    }
  });
});
