# Memory Log

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

Questo file traccia l'intera sessione di lavoro, le decisioni prese, gli errori incontrati e lo stato finale del progetto. Serve come memoria persistente per l'agente AI.

## 1. Log Interazioni (Cronologico)
... (vecchio contenuto mantenuto se serve, o archiviato. Per ora lo mantengo sotto)
*   **Inizio:** Richiesta utente di creare un "perfect portfolio" partendo dai file zip forniti.
*   **Tentativo 1 (Next.js):** L'agente ha inizializzato un nuovo progetto Next.js 15 (App Router, Tailwind, Framer Motion), migrato i dati da `legacy` e creato una UI moderna/minimale.
*   **Feedback 1:** L'utente ha richiesto uno stile "Futuristico/Dark/Neon". L'agente ha applicato un tema Cyberpunk.
*   **Errore Tecnico 1:** Errore Server Component con Framer Motion. Risolto aggiungendo `"use client"`.
*   **Feedback Critico (Pivot):** L'utente ha scartato la versione Next.js ("fa cacare") e ha ordinato di pubblicare il progetto originale (`guido-diell-portfolio` basato su Vite/React) su GitHub.
*   **Setup Deploy Originale:**
    *   Verificato che il codice fosse già su GitHub (`disel07/Diell-Guido`).
    *   Configurato `vite.config.ts` con `base: '/Diell-Guido/'`.
    *   Configurato `package.json` con `gh-pages`.
*   **Problemi di Deploy:**
    *   *Errore:* `git remote` mancante. -> Risolto aggiungendo remote origin.
    *   *Errore:* `branch named gh-pages already exists`. -> Risolto pulendo la cache di `gh-pages`.
    *   *Errore:* "Schermata Nera" sul sito live.
*   **Debugging "Schermata Nera":**
    *   Analisi: Il file `index.html` conteneva percorsi assoluti (`/index.tsx`) e `importmap` non compatibili con il build di produzione Vite.
    *   Azione: Modificato `index.html` rimuovendo importmap e usando percorsi relativi (`./index.tsx`).
    *   Azione: Aggiornato `vite.config.ts` per forzare `rollupOptions.input` su `index.html`.
*   **Problema Configurazione GitHub:**
    *   L'utente notava deploy vecchi ("30 mins ago").
    *   Causa: GitHub Pages era impostato per leggere dal branch `main` (sorgente) invece che `gh-pages` (build).
    *   Soluzione: Modificate impostazioni repository su GitHub (Source: `gh-pages`).
*   **Conclusione:** Deploy avvenuto con successo. Sito visibile e funzionante.

## 2. Decisioni Chiave & Razionale

*   **Abbandono Next.js:** Nonostante i vantaggi tecnici (SEO, performance), la preferenza estetica e funzionale dell'utente per il design originale ha prevalso. Si è deciso di puntare sul deploy del progetto esistente React/Vite.
*   **Gestione Path (Vite):** È stato necessario impostare `base: '/Diell-Guido/'` in `vite.config.ts`. Senza questo, gli asset (JS/CSS) venivano cercati nella root del dominio (`disel07.github.io/`) invece che nella sottocartella del progetto, causando errori 404.
*   **Pulizia index.html:** Il template originale (probabilmente generato da AI Studio) conteneva configurazioni ibride dev/prod (`importmap`). Si è deciso di rimuoverle per affidarsi completamente al bundler di Vite, standard industriale per la produzione.
*   **Deploy tramite `gh-pages`:** Scelto come metodo più rapido e affidabile per progetti Vite su GitHub Pages rispetto alle GitHub Actions manuali, automatizzando il push della cartella `dist`.

## 3. Stato Attuale del Progetto

*   **Repository:** `https://github.com/disel07/Diell-Guido`
*   **URL Pubblico:** `https://disel07.github.io/Diell-Guido/`
*   **Cartella di Lavoro Attiva:** `/home/disel/Desktop/Diell Guido/guido-diell-portfolio`
*   **Framework:** React 19 + Vite.
*   **Stato Build:** Funzionante. Il comando `npm run deploy` compila correttamente in `dist/` e pubblica su branch `gh-pages`.
*   **Configurazione GitHub:** Pages impostate su branch `gh-pages` / root.

## 4. Prossimi Passi (Actionable Items)

1.  **Sincronizzazione Git:** Attualmente il branch `main` remoto potrebbe essere disallineato rispetto al locale (a causa di force push o modifiche manuali). Al prossimo avvio, eseguire un `git pull --rebase origin main` prima di fare modifiche al codice sorgente.
2.  **Pulizia Workspace:** La cartella radice (`/home/disel/Desktop/Diell Guido/`) contiene ancora i residui del tentativo Next.js (cartelle `src`, `app`, `components` fuori da `guido-diell-portfolio`). Si consiglia di eliminare tutto ciò che è fuori dalla cartella `guido-diell-portfolio` per evitare confusione.
3.  **Privacy:** Verificare il file `guido-diell-portfolio/constants.ts` (o simili) per rimuovere dati sensibili (telefono, indirizzo preciso) se presenti nel codice sorgente pubblico.
4.  **Manutenzione:** Per aggiornare il sito in futuro:
    *   Modificare il codice in `guido-diell-portfolio`.
    *   Eseguire `npm run deploy`.
