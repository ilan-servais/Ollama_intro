# Chat Ollama Local avec Llama 3.2

Ce projet est une interface web simple pour interagir avec le modèle Llama 3.2 via Ollama en local sur votre ordinateur.

## Prérequis

- Un ordinateur avec Windows, macOS ou Linux
- Au moins 8 Go de RAM (16 Go recommandés)
- Environ 9 Go d'espace disque pour le modèle Llama 3.2
- Navigateur web moderne (Chrome, Firefox, Edge, Safari)

## Installation d'Ollama

1. Téléchargez Ollama depuis le site officiel: [ollama.com](https://ollama.com)
2. Installez le logiciel en suivant les instructions pour votre système d'exploitation:
   - **Windows**: Exécutez l'installateur et suivez les instructions
   - **macOS**: Glissez l'application dans votre dossier Applications
   - **Linux**: Utilisez la commande fournie sur le site

## Téléchargement du modèle Llama 3.2

1. Ouvrez un terminal (ou invite de commandes sous Windows)
2. Exécutez la commande suivante:

```bash
ollama pull llama3.2
```
ou
```bash
ollama pull llama3.2:latest
```

3. Attendez que le téléchargement soit terminé (environ 9 Go)

## Utilisation de l'interface web

1. Assurez-vous qu'Ollama est démarré et fonctionne en arrière-plan
2. Ouvrez le fichier `index.html` dans votre navigateur
3. Tapez votre message dans la zone de texte
4. Cliquez sur "Envoyer"
5. Attendez la réponse du modèle

## Personnalisation

Vous pouvez modifier le modèle utilisé en changeant la ligne suivante dans le fichier `index.html`:

```javascript
body: JSON.stringify({ model: 'llama3.2:latest', prompt: prompt })
```

Remplacez `llama3.2:latest` par un autre modèle disponible sur Ollama.

## Commandes utiles d'Ollama

- Liste des modèles installés: `ollama list`
- Supprimer un modèle: `ollama rm [nom-du-modèle]`
- Exécuter un modèle directement dans le terminal: `ollama run [nom-du-modèle]`

## Dépannage

- Si vous rencontrez l'erreur "Connection refused", vérifiez qu'Ollama est bien démarré
- Si le modèle est lent, vérifiez que votre ordinateur a assez de ressources disponibles
- Sur Windows, assurez-vous que le pare-feu ne bloque pas Ollama

## Ressources supplémentaires

- [Documentation Ollama](https://github.com/ollama/ollama/blob/main/README.md)
- [Documentation Llama 3](https://ai.meta.com/llama/)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
# Ollama_intro
