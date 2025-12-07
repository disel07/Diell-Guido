# Guido Diell - Portfolio

Un portfolio moderno, minimale e performante costruito con Next.js 15, Tailwind CSS e TypeScript.

## Caratteristiche

- **Stack Moderno**: Next.js 15 (App Router), Tailwind CSS v4.
- **Static Export**: Configurato per essere ospitato ovunque (GitHub Pages, Vercel, Netlify) come sito statico.
- **Design**: Minimale, "serio", con focus sui contenuti e tipografia pulita.
- **Animazioni**: Transizioni fluide con Framer Motion.
- **Dati**: Tutti i contenuti sono centralizzati in `src/data/index.ts` per facile aggiornamento.

## Sviluppo

1.  **Installare dipendenze**:
    ```bash
    npm install
    ```

2.  **Avviare server di sviluppo**:
    ```bash
    npm run dev
    ```

3.  **Build per produzione (Statico)**:
    ```bash
    npm run build
    ```
    Il sito generato si troverà nella cartella `out/`.

## Struttura del Progetto

- `src/app`: Pagine e layout (Next.js App Router).
- `src/components`:
    - `ui`: Componenti base (Bottoni, ecc.).
    - `sections`: Sezioni della landing page (Hero, About, Experience...).
    - `layout`: Navbar, Footer, Container.
- `src/data`: Dati statici (Testi, Esperienze, Skills).
- `src/lib`: Utility functions.
- `legacy/`: Codice del vecchio portfolio (riferimento).