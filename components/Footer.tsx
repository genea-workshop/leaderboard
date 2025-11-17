import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-brand-surface/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-6 text-sm text-brand-text/70 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-wide text-brand-text/60">GENEA Gesture-Generation Leaderboard</p>
        <div className="flex flex-wrap gap-4 font-medium text-brand-primary">
          <a
            href="https://github.com/genea-workshop/leaderboard"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-brand-secondary"
          >
            Project GitHub
          </a>
          <a
            href="https://genea-workshop.github.io/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-brand-secondary"
          >
            GENEA Workshop
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;