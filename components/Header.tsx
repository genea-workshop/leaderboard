import React from 'react';
import { Page } from '../App';
import { BASE_PATH } from '../constants';

const PAGES: { id: Page; label: string; slug: string; }[] = [
  { id: 'Leaderboard', label: 'Leaderboard', slug: '' },
  { id: 'DataRelease', label: 'Data release', slug: 'data-release' },
  { id: 'Tooling', label: 'Tooling', slug: 'tooling' },
  { id: 'Submit', label: 'Submit', slug: 'submit' },
  { id: 'AboutUs', label: 'About Us', slug: 'about-us' },
];

interface NavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, onClick, children, isActive }) => {
  const baseClasses = 'block px-4 py-2 rounded-md text-sm font-medium transition-colors';
  const activeClasses = 'bg-brand-primary text-white shadow';
  const inactiveClasses = 'text-brand-text-muted hover:bg-gray-200 hover:text-brand-text';

  return (
    <li>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </a>
    </li>
  );
};

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const basePath = BASE_PATH || '/';
  return (
    <header className="py-8 bg-brand-surface border-b border-gray-200">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="mb-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary leading-snug">
            GENEA Gesture-Generation Leaderboard
          </h1>
        </div>

        <nav className="w-full flex justify-center">
          <ul className="flex items-center space-x-2">
            {PAGES.map((page) => (
              <NavLink
                key={page.id}
                isActive={currentPage === page.id}
                onClick={() => onNavigate(page.id)}
                href={`${basePath}${page.slug || ''}`}
              >
                {page.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;