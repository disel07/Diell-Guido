# Piano: Implementazione Sezione Progetti Visiva

**Data:** 2025-12-07
**Stato:** Pending

## Obiettivo
Creare una sezione visiva dedicata ai "Progetti" all'interno della pagina principale (`App.tsx`). Attualmente i progetti sono definiti in `constants.ts` ma non vengono mostrati nel corpo della pagina (solo nel dropdown della Navbar).

La nuova sezione dovrà mostrare delle card interattive per ogni progetto, coerenti con lo stile Cyberpunk/Dark del sito.

## Dati Sorgente
Utilizzeremo l'array `PROJECTS` già definito e popolato dall'utente in `guido-diell-portfolio/constants.ts`:
```typescript
export const PROJECTS = [
  { name: 'SmartCompound', url: '#', description: 'Trasforma il tuo caffè in un Impero' },
  { name: 'CareerPath-Proiezioni', url: '#', description: 'Life Simulator Progetta due vite parallele.' },
  { name: 'Portfolio Diell-Guido', url: '#', description: 'Il mio portfolio personale' },
];
```

## Modifiche Richieste

### 1. Nuovo Componente (`components/Projects.tsx`)
- Creare un componente `Projects` che accetta la lista dei progetti.
- **Layout:** Griglia responsive (1 colonna mobile, 2/3 colonne desktop).
- **Design Card:**
    - Background scuro/translucido (`bg-cyber-card`).
    - Bordo neon al passaggio del mouse (`hover:border-cyber-primary`).
    - Titolo evidenziato.
    - Descrizione breve.
    - Pulsante/Link "View Project" (che usa l'URL definito).
- **Animazioni:** Fade-in all'arrivo dello scroll (usando `framer-motion` come nelle altre sezioni).

### 2. Integrazione in `App.tsx`
- Importare `Projects` in `App.tsx`.
- Inserire il componente nella struttura della pagina, idealmente tra "Skills" ed "Experience" (o prima di Experience).
- Assicurarsi che ci sia l'`id="projects"` per lo scorrimento fluido dalla Navbar.

### 3. Aggiornamento Navbar (`components/Navbar.tsx`)
- Verificare che il link "Projects" punti a `#projects` per lo scroll interno, oltre (o in alternativa) al menu a tendina.
- Se il menu a tendina rimane, assicurarsi che ci sia coerenza (es. "All Projects" che porta alla sezione).

## Piano di Esecuzione

1.  [ ] Creare il file `guido-diell-portfolio/components/Projects.tsx`.
2.  [ ] Implementare la logica di rendering e lo stile delle card.
3.  [ ] Aggiungere il componente in `guido-diell-portfolio/App.tsx`.
4.  [ ] Verificare la navigazione (scroll) in `Navbar.tsx`.
5.  [ ] Test locale (`npm run dev`) e Deploy (`npm run deploy`).
