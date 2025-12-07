# Riassunto Sessione - 06 Dicembre 2025

## Obiettivo
Pubblicazione del portfolio "Guido Diell" (versione originale React/Vite) su GitHub Pages e risoluzione problemi di configurazione e visualizzazione (schermata nera).

## Stato Finale
Il progetto è stato deployato con successo ed è visibile online su `https://disel07.github.io/Diell-Guido/`.

## Modifiche al Codice (Progetto `guido-diell-portfolio`)

### 1. `vite.config.ts`
Aggiornata la configurazione per supportare il deploy in sottocartella su GitHub Pages e definire esplicitamente l'entry point.

```typescript
import path from 'path';
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      base: '/Diell-Guido/', // Fondamentale per GitHub Pages
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'), // Entry point esplicito
          },
        },
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
```

### 2. `package.json`
Aggiunti gli script per automatizzare il deploy tramite il pacchetto `gh-pages`.

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. `index.html`
Ripulito da configurazioni non standard (importmap) e percorsi assoluti errati che causavano errori 404.

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <!-- ... meta tags e font ... -->
    <!-- Tailwind via CDN mantenuto come da originale -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- ... config tailwind ... -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./index.tsx"></script> <!-- Percorso relativo -->
  </body>
</html>
```

## Comandi Eseguiti e Procedura di Deploy

1.  **Installazione dipendenze**: `npm install gh-pages --save-dev`
2.  **Configurazione Remoto**: `git remote add origin https://github.com/disel07/Diell-Guido.git`
3.  **Pulizia Cache**: `rm -rf dist node_modules/.cache/gh-pages` (per risolvere conflitti di branch).
4.  **Deploy**: `npm run deploy`
    *   Esegue il build (Vite genera `dist/` con percorsi corretti grazie a `base`).
    *   Esegue `gh-pages` che pusha `dist/` sul branch `gh-pages`.

## Configurazione GitHub (Cruciale)
Su GitHub (Settings -> Pages), la sorgente è stata impostata su:
*   **Source**: Deploy from a branch
*   **Branch**: `gh-pages`
*   **Folder**: `/ (root)`

(Inizialmente era impostato su `main`, causando il deploy del codice sorgente invece del sito compilato).

## Problemi Risolti
*   **Schermata Nera / 404**: Risolto impostando `base: '/Diell-Guido/'` in Vite e correggendo `src` in `index.html` da `/index.tsx` a `./index.tsx`.
*   **"Ciao" visualizzato**: Risolto rimuovendo il tag di debug e forzando l'aggiornamento del branch `gh-pages` corretto su GitHub.
*   **Mancata compilazione HTML**: Risolto specificando `rollupOptions.input.main` in `vite.config.ts`.
