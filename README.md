# 🚀 Guido Diell - Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind-3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
</p>

<p align="center">
  <a href="https://disel07.github.io/Diell-Guido/" target="_blank" rel="noopener noreferrer">
    <strong>🌐 Live Demo</strong>
  </a>
</p>

---

## ✨ Features

- 🎨 **Design Cyberpunk** - Tema scuro con accenti neon cyan e viola
- 🎬 **Animazioni Avanzate** - Framer Motion per transizioni fluide
- 🎮 **Effetti Interattivi** - Cursor custom, spotlight, particelle, glitch
- ♿ **Accessibilità** - WCAG compliant, reduced motion support
- ⚡ **Performance** - Ottimizzato per 60fps, lazy loading
- 📱 **Responsive** - Mobile-first design
- 🔍 **SEO** - JSON-LD, sitemap, meta tags ottimizzati

---

## 🛠️ Tech Stack

| Categoria | Tecnologie |
|-----------|-----------|
| **Frontend** | React 19, TypeScript |
| **Build** | Vite 6 |
| **Styling** | Tailwind CSS, CSS Custom |
| **Routing** | React Router DOM |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Deploy** | GitHub Pages |

---

## 🎨 Effetti Grafici

### Cursor Personalizzato
- Croce terminale stile hacker con anello e glow
- Segue il mouse con animazione spring

### Decode Effect
- Nome che decodifica da simboli Matrix (katakana)
- Progressione da sinistra a destra

### Mouse Spotlight
- Luce radiale che segue il cursore
- Aggiunge profondità all'interfaccia

### Glitch Effects
- Card con effetto scanline al hover
- Glitch casuale ogni 15-30s sui titoli

### Glassmorphism
- Backdrop blur 20-30px
- Bordi glow e trasparenza

### Particelle & Scanline
- 30 particelle animate sullo sfondo
- Effetto CRT con scanline

---

## 📁 Struttura Progetto

```
guido-diell-portfolio/
├── components/          # Componenti React
│   ├── CustomCursor.tsx
│   ├── DecodeText.tsx
│   ├── MatrixBackground.tsx
│   ├── Navbar.tsx
│   └── ...
├── hooks/              # Custom Hooks
├── pages/              # Pagine
├── public/             # Asset statici
├── utils/              # Utility
├── legacy/             # Progetti passati
└── README.md           # Questo file
```

---

## 🚀 Come Usare

### Prerequisiti
- Node.js 20+
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/disel07/Diell-Guido.git

# Entra nella cartella del progetto
cd Diell-Guido/guido-diell-portfolio

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

### Build Produzione

```bash
npm run build
```

### Deploy
Il deploy è automatico via GitHub Actions su ogni push su `main`.

### Branch e GitHub Pages

Il repository usa questa convenzione:

- `main` è il branch stabile e quello che pubblica il portfolio.
- I branch `feature/*`, `fix/*` o personali servono per lavorare senza
  pubblicare modifiche incomplete.
- `gh-pages` non viene più usato: GitHub Pages è configurato con **GitHub
  Actions** come sorgente e il workflow `.github/workflows/deploy.yml`
  pubblica l'artifact generato da `main`.

Flusso consigliato:

```bash
git switch main
git pull --ff-only
git switch -c feature/nome-modifica
# lavora e verifica localmente in guido-diell-portfolio/
git push -u origin feature/nome-modifica
# apri una Pull Request verso main
```

Dopo il merge su `main`, il workflow esegue `npm ci`, `npm run build` e
pubblica automaticamente su
`https://disel07.github.io/Diell-Guido/`.

---

## 📦 Progetti Legacy

Questo portfolio include anche i progetti passati:

- 🔷 **SmartCompound** - Simulatore investimenti composto
- 🔷 **CareerPath Proiezioni** - Simulatore percorso professionale

Entrambi sono accessibili dalla sezione Projects del portfolio.

---

## ♿ Accessibilità

- ✅ Semantic HTML5
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus visible indicators
- ✅ Reduced motion support
- ✅ Color contrast compliant

---

## ⚡ Performance

- Matrix background ottimizzato (30fps, pausa su tab inattivo)
- Componenti memoizzati con React.memo
- Lazy loading per componenti pesanti
- Prefers-reduced-motion per accessibilità

---

## 📝 Licenza

Questo progetto è open source. Sentiti libero di usarlo come template per il tuo portfolio!

---

<p align="center">
  Made with ❤️ by <strong>Guido Diell</strong>
</p>
