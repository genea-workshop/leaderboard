import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import DataReleasePage from './components/pages/DataReleasePage';
import SubmitPage from './components/pages/SubmitPage';
import AboutUsPage from './components/pages/AboutUsPage';
import ToolsPage from './components/pages/ToolsPage';
import { BASE_PATH } from './constants';

export type Page = 'Leaderboard' | 'DataRelease' | 'Tools' | 'Submit' | 'AboutUs';

const pageToSlug: Record<Page, string> = {
  Leaderboard: '',
  DataRelease: 'data-release',
  Tools: 'tools',
  Submit: 'submit',
  AboutUs: 'about-us',
};

const slugToPage = Object.fromEntries(Object.entries(pageToSlug).map(([page, slug]) => [slug, page as Page]));

const getPageFromPath = (path: string): Page => {
  const basePath = BASE_PATH || '/';
  let relativePath = path.startsWith(basePath) ? path.substring(basePath.length) : path;
  if (relativePath.length > 0 && relativePath.endsWith('/')) {
    relativePath = relativePath.slice(0, -1);
  }
  return slugToPage[relativePath] || 'Leaderboard';
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => getPageFromPath(window.location.pathname));

  const handleNavigate = (page: Page) => {
    const slug = pageToSlug[page];
    const path = `${BASE_PATH}${slug || ''}`;

    // Construct a full URL to compare against location.href to handle potential hash/search params
    const targetUrl = new URL(path, window.location.origin);

    if (window.location.href !== targetUrl.href) {
      window.history.pushState({ page }, '', path);
    }
    setCurrentPage(page);
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'Leaderboard':
        return <Leaderboard onNavigate={handleNavigate} />;
      case 'DataRelease':
        return <DataReleasePage />;
      case 'Tools':
        return <ToolsPage />;
      case 'Submit':
        return <SubmitPage />;
      case 'AboutUs':
        return <AboutUsPage />;
      default:
        return <Leaderboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-brand-text">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;