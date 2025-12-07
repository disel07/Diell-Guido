# Piano: Setup Iniziale Portfolio (Aggiornato)

## Obiettivo
Creare un sito portfolio **statico**, minimale e altamente performante, migliorando la versione precedente contenuta in `guido-diell-portfolio.zip`.

## Stack Tecnologico
- **Framework**: Next.js 15 (App Router)
- **Rendering**: Static Export (`output: 'export'`)
- **Linguaggio**: TypeScript
- **Stile**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Font**: Geist Sans / Geist Mono (default Next.js 15) o Inter.

## Passi Concreti
1.  **Analisi Legacy**: Ispezionare `temp_legacy_portfolio` per estrarre testi, immagini e capire la struttura precedente.
2.  **Inizializzazione**: Eseguire `npx create-next-app@latest .`
    - TypeScript: Yes
    - ESLint: Yes
    - Tailwind: Yes
    - `src/` directory: Yes
    - App Router: Yes
    - Turbopack: Yes
3.  **Configurazione Statica**: Modificare `next.config.ts` per aggiungere `output: 'export'` e `images: { unoptimized: true }`.
4.  **Pulizia & Struttura**:
    - Ripulire `page.tsx` e `globals.css`.
    - Creare struttura: `components/{ui,layout,sections}`, `data/`, `public/assets/`.
5.  **Migrazione Contenuti**: Spostare asset e testi rilevanti dal vecchio progetto al nuovo.
6.  **Sviluppo UI**: Implementare una landing page moderna e "seria".