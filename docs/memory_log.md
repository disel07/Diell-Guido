# Memory Log

## 2025-12-07 - Pubblicazione Progetti Secondari & Setup Finale
*   **Problema:** I progetti "SmartCompound" e "CareerPath" linkati nel portfolio davano 404.
*   **Azione:** Configurato deploy per i progetti situati in `legacy/`.
    *   Fix `vite.config.ts`: Rimosso dipendenza `path`, aggiunto `base: '/NomeProgetto/'`.
    *   Fix `index.html`: Percorsi relativi, rimossa importmap.
    *   Setup `package.json`: Aggiunto script `deploy` e dipendenza `gh-pages`.
*   **Risultato:** Entrambi i progetti pubblicati con successo su GitHub Pages.
*   **Aggiornamento Regole:** Modificato `GEMINI.md` con sezione "Stato Progetto" e regole di contesto/pulizia obbligatorie.

## 2025-12-07 - Integrazione AI Studio & Aggiornamento Protocollo

*   **Importazione Massiva:**
    *   Creato backup preventivo (commit Git).
    *   Importati nuovi file generati da AI Studio tramite cartella temporanea `update_temp`.
    *   Sovrascritti file chiave in `guido-diell-portfolio/`: `Hero.tsx` (layout responsive), `Navbar.tsx` (menu progetti, fix link), `Contact.tsx` (rimosso form, solo footer), `MatrixBackground.tsx` (ottimizzazione loop), `index.html` (fix scroll).
    *   Eseguito `npm install` per allineare dipendenze.
*   **Gestione Progetto:**
    *   Aggiornato `GEMINI.md` (root e .gemini) per imporre protocollo di documentazione obbligatorio.
    *   Creato documento di piano retroattivo `docs/2025-12-07-integrazione-ai-studio.md`.
    *   Effettuato commit delle modifiche di documentazione.

## 2025-12-07 - Modifiche Manuali Utente & Pulizia
*   **Modifiche manuali utente in `guido-diell-portfolio/constants.ts`:**
    *   Rimozione numero di telefono e semplificazione indirizzo.
    *   Aggiornamento link GitHub e LinkedIn.
    *   Aggiunta di 3 nuovi progetti: "SmartCompound", "CareerPath-Proiezioni", "Portfolio Diell-Guido".
    *   Aggiornamento livelli di skill linguistici.
*   **Pulizia Radicale:**
    *   Rimossi dalla root tutti i file residui del progetto Next.js (`src`, `app`, `node_modules`, config file).
    *   Creato `README.md` nella root che punta alla cartella attiva `guido-diell-portfolio`.
    *   Eseguito `npm prune` e `git remote prune` nella cartella attiva.

## 2025-12-07 - Fix Critico Deploy & Pubblicazione
*   **Problema:** Schermata nera/bianca su GitHub Pages dopo il deploy.
*   **Diagnosi:**
    *   Mancava `base: '/Diell-Guido/'` in `vite.config.ts`.
    *   `index.html` usava percorsi assoluti (`/index.tsx`) e conteneva `importmap` non compatibili con il build.
*   **Risoluzione:**
    *   Aggiunto `base` path in `vite.config.ts`.
    *   Corretti percorsi in `index.html` (relativi `./`) e rimossa `importmap`.
    *   Ripristinato pacchetto `gh-pages` e script di deploy in `package.json`.
*   **Risultato:** Deploy eseguito con successo (`Published`). Utente conferma funzionamento.

## Sessione del 06 Dicembre 2025
... (Vedi file precedenti per storico completo)