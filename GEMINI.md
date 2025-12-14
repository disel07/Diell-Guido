pages già aggiornato :{shttps://github.com/disel07/Diell-Guido.git};
## Stato Progetto (Aggiornato: 2025-12-07)
- **Portfolio Principale:** React + Vite. Pubblicato su `disel07.github.io/Diell-Guido/`. Funzionante.
- **Progetti Secondari:** SmartCompound e CareerPath pubblicati correttamente. Link attivi.
- **Manutenzione:** Pulizia root completata. Protocollo documentazione attivo.

## Obiettivo
Realizzare un sito portfolio SERIO, minimale e facile da mantenere.

**Nota Importante:** Il progetto attivo è la versione React/Vite situata nella cartella `guido-diell-portfolio/`. Il codice nella root (Next.js) è legacy/abbandonato.

## Documentazione e Storico
Tutta la documentazione, lo storico delle sessioni e i piani futuri si trovano nella cartella `docs/`.
- **Ultimo stato:** Vedi `docs/2025-12-07-session-summary.md` e `docs/memory_log.md`.
- **Piani:** Vedi `docs/` per i file di piano (es. `YYYY-MM-DD-nome-feature.md`).

## Regole di lavoro

- **Contesto & Pulizia (NUOVO):**
  - Prima di ogni comando complesso, leggi i file di documentazione PIÙ RECENTI in `docs/` per avere il contesto aggiornato.
  - Se trovi informazioni obsolete o inutili nei file vecchi (`docs/` o `legacy/`), procedi alla pulizia o archiviazione per mantenere il repository snello.
  - Ogni errore incontrato o modifica effettuata DEVE essere registrata in `docs/memory_log.md`.

- Prima di implementare QUALSIASI nuova feature o cambiamento importante:
  1. Leggi lo storico in `docs/` per capire il contesto.
  2. Crea o aggiorna un file di piano in `docs/YYYY-MM-DD-nome-feature.md`.
  3. Nel piano DEVI includere queste sezioni obbligatorie:
     - **Obiettivi & KPI:** Cosa vogliamo ottenere e come lo misuriamo (es. performance, assenza bug).
     - **Dettagli Tecnici:** Librerie, pattern architetturali e modifiche strutturali.
     - **Specifiche di Implementazione:** Lista dei file e passi logici sequenziali.
     - **Criteri di Accettazione:** Checklist binaria (Sì/No) per considerare il task "Done".
  4. Mostrami sempre il piano strutturato così prima di iniziare.

- Quando modifichi il codice:
  - Lavora principalmente nella cartella `guido-diell-portfolio/` (salvo diversa indicazione).
  - Spiega sempre quali file stai cambiando.
  - Mantieni il codice semplice, leggibile e facilmente modificabile.
  - Evita ottimizzazioni premature o pattern troppo complessi.


## Come interagire con me

- Quando ti chiedo qualcosa su questo progetto, ASSUMI che:
  - I piani e la documentazione sono in `docs/`.
- Se ti chiedo una nuova feature, il flusso deve essere sempre:
  1. Consultare `docs/` per coerenza.
  2. Proporre/aggiornare un piano in `docs/`.
  3. Attendere la mia approvazione.
  4. Solo dopo modificare/creare file, se necessario, proporre i comandi da eseguire.

- Se qualcosa nel workspace non è chiaro (struttura, file mancanti, conflitti), chiedimi SEMPRE chiarimenti prima di inventare struttura nuova.

## Protocollo di Documentazione (OBBLIGATORIO)

Ogni sessione e ogni modifica significativa DEVE seguire questo flusso rigoroso:

1.  **Memory Log (`docs/memory_log.md`):**
    -   All'inizio di ogni giornata, aggiungi una intestazione con la data (es. `## YYYY-MM-DD`).
    -   Registra sinteticamente ogni macro-azione, comando rilevante o decisione presa.

2.  **Feature Plan (`docs/YYYY-MM-DD-nome-feature.md`):**
    -   Per OGNI task o modifica, deve esistere un file di piano specifico.
    -   Aggiorna questo file **mentre** lavori, non solo alla fine.
    -   Ogni passo completato deve essere spuntato.

