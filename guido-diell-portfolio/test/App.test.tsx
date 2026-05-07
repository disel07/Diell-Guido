import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import App from '../App';

function renderApp(path = '/Diell-Guido/') {
  window.history.pushState({}, '', path);
  return render(<App />);
}

describe('portfolio app', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  it('renders the English portfolio by default', async () => {
    renderApp();

    expect(await screen.findByText('IT Student | Python · Linux · Docker · Bash · SQL')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(await screen.findByText('CURRENTLY', {}, { timeout: 5000 })).toBeInTheDocument();
    expect(await screen.findByText('FEATURED', {}, { timeout: 5000 })).toBeInTheDocument();
    expect(await screen.findByText('ITI A. Monaco - Informatica', {}, { timeout: 5000 })).toBeInTheDocument();
  });

  it('switches the visible language to Italian and persists the choice', async () => {
    const user = userEvent.setup();
    renderApp();

    const languageButtons = await screen.findAllByRole('button', { name: /switch language to italian/i });
    await user.click(languageButtons[0]);

    expect(screen.getByText('Studente IT | Python · Linux · Docker · Bash · SQL')).toBeInTheDocument();
    expect(window.localStorage.getItem('portfolio-language')).toBe('it');
  });

  it('renders the project catalog and filters by category', async () => {
    const user = userEvent.setup();
    renderApp('/Diell-Guido/projects/all');

    expect(await screen.findByText('FULL PROJECT')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Python' }));

    expect(screen.getByText('Organizer-Foto-Pro')).toBeInTheDocument();
    expect(screen.queryByText('SmartCompound')).not.toBeInTheDocument();
  });

  it('keeps GitHub Pages project links and social preview metadata valid', async () => {
    renderApp();

    const projectsSection = await screen.findByRole('list', { name: /quick navigation to skills/i });
    expect(within(projectsSection).getByText('Web Development')).toBeInTheDocument();

    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');
    expect(html).toContain('https://disel07.github.io/Diell-Guido/preview-image.png');
    expect(html).toContain('<link rel="canonical" href="https://disel07.github.io/Diell-Guido/">');
    expect(html).toContain('Cybersecurity');
    expect(html).toContain('Blockchain');
  });

  it('handles GitHub Pages 404 redirect storage', async () => {
    window.sessionStorage.setItem('gh-pages-redirect', '/projects/all');
    renderApp('/Diell-Guido/');

    await waitFor(() => expect(window.location.pathname).toBe('/Diell-Guido/projects/all'));
    expect(screen.getByText('FULL PROJECT')).toBeInTheDocument();
  });
});
