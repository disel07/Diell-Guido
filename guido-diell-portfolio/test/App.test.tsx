import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
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
    vi.clearAllMocks();
  });

  it('renders the English portfolio by default with 2026 LinkedIn career milestones', async () => {
    renderApp();

    // Profile & Hero
    expect(
      await screen.findByText('Computer Science Student @ UniCal | HR Recruiter @ RootRunners')
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(await screen.findByText('CURRENTLY')).toBeInTheDocument();

    // Avatar
    expect(screen.getByAltText('Guido Diell - Open to Work profile')).toBeInTheDocument();

    // Certifications & Credly
    const itSecurity = await screen.findByRole('heading', { name: 'IT Security' });
    const modernAi = await screen.findByRole('heading', { name: 'Introduction to Modern AI' });
    expect(Boolean(itSecurity.compareDocumentPosition(modernAi) & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true);
    expect(screen.getByRole('heading', { name: 'LLPA Digital Skills Cup - National Champion IT Security' })).toBeInTheDocument();
    expect(screen.queryByText(/75%|70%|60%|100%/)).not.toBeInTheDocument();

    // Awards (both Anitec-Assinform & LLPA National Champion)
    expect(await screen.findByText('National Digital Innovation Award 2026')).toBeInTheDocument();
    expect(await screen.findByText('LLPA Digital Skills Cup - National Champion 2026 IT Security')).toBeInTheDocument();

    // Education (UniCal and ITI A. Monaco with graduation grade 92/100)
    expect(await screen.findByText('Università della Calabria (UniCal)')).toBeInTheDocument();
    expect(await screen.findByText('ITI A. Monaco - Informatica')).toBeInTheDocument();
    expect(await screen.findByText('Graduation Grade: 92/100')).toBeInTheDocument();

    // Experience (RootRunners and Urban Italian Group)
    expect(await screen.findByText('RootRunners')).toBeInTheDocument();
    expect(await screen.findByText('Urban Italian Group')).toBeInTheDocument();
    expect(screen.getByAltText('RootRunners logo')).toBeInTheDocument();
    expect(screen.getByAltText('Urban Italian Group logo')).toBeInTheDocument();
  });

  it('switches the visible language to Italian and persists the choice', async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole('button', { name: /switch language to italian/i }));

    expect(screen.getByText('Studente di Informatica @ UniCal | HR Recruiter @ RootRunners')).toBeInTheDocument();
    expect(window.localStorage.getItem('portfolio-language')).toBe('it');

    // Italian milestones
    expect(screen.getByText("Premio Nazionale sull'Innovazione Digitale 2026")).toBeInTheDocument();
    expect(screen.getByText('LLPA Digital Skills Cup - Campione Nazionale 2026 IT Security')).toBeInTheDocument();
    expect(screen.getByText('Votazione: 92/100')).toBeInTheDocument();
    expect(screen.getByText('Laurea Triennale in Informatica')).toBeInTheDocument();
    expect(screen.getByText('Addetto alla selezione del personale / HR Recruiter')).toBeInTheDocument();
    expect(screen.getByText('Pizzaiolo')).toBeInTheDocument();
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

  it('meets WCAG 2.1 AA keyboard accessibility and label requirements', async () => {
    renderApp();

    // Skip to content link
    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');

    // Logo is a keyboard-operable button with accessible label
    const logoButton = screen.getByRole('button', { name: /guido diell - return to top/i });
    expect(logoButton).toBeInTheDocument();

    // Main navigation and landmark roles
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');

    // Quick navigation buttons are keyboard accessible
    const quickList = screen.getByRole('list', { name: /quick navigation to skills/i });
    expect(within(quickList).getAllByRole('link').length).toBe(3);

    // Language toggle has accessible label
    expect(screen.getByRole('button', { name: /switch language to italian/i })).toBeInTheDocument();
  });

  it('honors reduced motion preference and avoids mobile cursor hiding', async () => {
    const { container } = renderApp();

    // Root element should never have unconditional cursor-none
    const rootContainer = container.querySelector('.bg-black.min-h-screen');
    expect(rootContainer).not.toHaveClass('cursor-none');

    // Canvas elements have motion-reduce:hidden class
    const canvasElements = container.querySelectorAll('canvas');
    expect(canvasElements.length).toBeGreaterThanOrEqual(1);
    canvasElements.forEach((canvas) => {
      expect(canvas.className).toContain('motion-reduce:hidden');
    });
  });
});
