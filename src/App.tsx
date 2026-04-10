import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TechnicalProjects from './components/TechnicalProjects';
import HandsOnProjects from './components/HandsOnProjects';
import ExtraCurriculum from './components/ExtraCurriculum';
import Art from './components/Art';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type Page = 'Home' | 'Technical Projects' | 'Hands-on Projects' | 'Art' | 'Extra Curriculum' | 'Experience' | 'Contact me';

export interface ViewState {
  page: Page;
  detailId?: number;
}

const pageToPath = (page: Page) => page.toLowerCase().replace(/\s+/g, '-');
const pathToPage = (path: string): Page => {
  const map: Record<string, Page> = {
    'home': 'Home',
    'technical-projects': 'Technical Projects',
    'hands-on-projects': 'Hands-on Projects',
    'art': 'Art',
    'extra-curriculum': 'Extra Curriculum',
    'experience': 'Experience',
    'contact-me': 'Contact me'
  };
  return map[path] || 'Home';
};

export default function App() {
  const [viewState, setViewState] = useState<ViewState>({ page: 'Home' });

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setViewState({ page: 'Home' });
        return;
      }
      
      const parts = hash.split('/');
      const page = pathToPage(parts[0]);
      const detailId = parts[1] ? parseInt(parts[1], 10) : undefined;
      
      setViewState({ page, detailId });
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Initialize on load

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (newState: ViewState) => {
    setViewState(newState);
    const basePath = pageToPath(newState.page);
    const hash = newState.detailId ? `#${basePath}/${newState.detailId}` : `#${basePath}`;
    
    // Only push state if it's different from current hash to avoid duplicates
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash);
    }
  };

  const renderPage = () => {
    const props = {
      detailId: viewState.detailId,
      onNavigateDetail: (id: number) => {
        navigate({ ...viewState, detailId: id });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      onBack: () => {
        navigate({ ...viewState, detailId: undefined });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    switch (viewState.page) {
      case 'Home': return <Home key="home" />;
      case 'Technical Projects': return <TechnicalProjects key="technical" {...props} />;
      case 'Hands-on Projects': return <HandsOnProjects key="handson" {...props} />;
      case 'Extra Curriculum': return <ExtraCurriculum key="extra" />;
      case 'Art': return <Art key="art" {...props} />;
      case 'Experience': return <Experience key="experience" />;
      case 'Contact me': return <Contact key="contact" />;
      default: return <Home key="home" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar viewState={viewState} setViewState={navigate} />
      <main className="pt-[80px] min-h-screen">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
    </div>
  );
}
