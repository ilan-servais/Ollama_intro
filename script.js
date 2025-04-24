document.getElementById('send-button').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value;
  if (!prompt.trim()) return;

  const chatContainer = document.getElementById('chat-container');

  // Ajouter le message utilisateur
  const userMessage = document.createElement('div');
  userMessage.className = 'message user';
  userMessage.textContent = prompt;
  chatContainer.appendChild(userMessage);

  // Effacer le champ de saisie
  document.getElementById('prompt').value = '';

  // Ajouter un message de chargement
  const loadingMessage = document.createElement('div');
  loadingMessage.className = 'message ai';
  loadingMessage.textContent = '⏳ En attente de la réponse...';
  chatContainer.appendChild(loadingMessage);

  // Appeler l'API
  try {
    const res = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'Jade:latest', prompt })
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });

      chunk.trim().split('\n').forEach(line => {
        try {
          const json = JSON.parse(line);
          if (json.response) {
            fullResponse += json.response;
            loadingMessage.textContent = fullResponse;
          }
        } catch (e) {
          // Ignorer les erreurs JSON partielles
        }
      });
    }
  } catch (error) {
    loadingMessage.textContent = '❌ Une erreur est survenue.';
  }
});
