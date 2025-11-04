import React, { useState } from 'react';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import DataReleasePage from './components/pages/DataReleasePage';
import SubmitPage from './components/pages/SubmitPage';
import AboutUsPage from './components/pages/AboutUsPage';
import ToolsPage from './components/pages/ToolsPage';

export type Page = 'Leaderboard' | 'DataRelease' | 'Tools' | 'Submit' | 'AboutUs';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Leaderboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'Leaderboard':
        return <Leaderboard onNavigate={setCurrentPage} />;
      case 'DataRelease':
        return <DataReleasePage />;
      case 'Tools':
        return <ToolsPage />;
      case 'Submit':
        return <SubmitPage />;
      case 'AboutUs':
        return <AboutUsPage />;
      default:
        return <Leaderboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-brand-text">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;