import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
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

  it('renders the English portfolio by default with updated sections', async () => {
    renderApp();

    expect(await screen.findByText('IT Student | Python · Linux · Docker · Bash · SQL')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(await screen.findByText('CURRENTLY')).toBeInTheDocument();
    const itSecurity = await screen.findByRole('heading', { name: 'IT Security' });
    const modernAi = await screen.findByRole('heading', { name: 'Introduction to Modern AI' });
    expect(Boolean(itSecurity.compareDocumentPosition(modernAi) & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true);
    expect(screen.queryByText(/75%|70%|60%|100%/)).not.toBeInTheDocument();
    expect(await screen.findByText('Recognition Pending Public Announcement')).toBeInTheDocument();
    expect(await screen.findByText('ITI A. Monaco - Informatica')).toBeInTheDocument();
  });

  it('switches the visible language to Italian and persists the choice', async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole('button', { name: /switch language to italian/i }));

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

  it('keeps GitHub Pages metadata and public files aligned', async () => {
    renderApp();

    const quickLinks = await screen.findByRole('list', { name: /quick navigation to skills/i });
    expect(within(quickLinks).getByText('Web Development')).toBeInTheDocument();

    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');
    const sitemap = readFileSync(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8');
    const notFound = readFileSync(resolve(process.cwd(), 'public/404.html'), 'utf8');

    expect(html).toContain('https://disel07.github.io/Diell-Guido/preview-image.png');
    expect(html).toContain('Cybersecurity');
    expect(html).toContain('Blockchain');
    expect(sitemap).toContain('/projects/all');
    expect(sitemap).not.toContain('/about');
    expect(sitemap).not.toContain('/contacts');
    expect(notFound).not.toContain('same request again');
  });

  it('handles GitHub Pages 404 redirect storage', async () => {
    window.sessionStorage.setItem('gh-pages-redirect', '/projects/all');
    renderApp('/Diell-Guido/');

    await waitFor(() => expect(window.location.pathname).toBe('/Diell-Guido/projects/all'));
    expect(screen.getByText('FULL PROJECT')).toBeInTheDocument();
  });
});
