import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TechnicalProjects from './components/TechnicalProjects';
import HandsOnProjects from './components/HandsOnProjects';
import ExtraCurriculum from './components/ExtraCurriculum';
import Art from './components/Art';
import Experience from './components/Experience';
import Contact from './components/Contact';

export type Page = 'Home' | 'Technical Projects' | 'Hands-on Projects' | 'Art' | 'Extra Curriculum' | 'Experience' | 'Contact me';

export interface ViewState {
  page: Page;
  detailId?: number;
}

export default function App() {
  const [viewState, setViewState] = useState<ViewState>({ page: 'Home' });

  const renderPage = () => {
    const props = {
      detailId: viewState.detailId,
      onNavigateDetail: (id: number) => {
        setViewState({ ...viewState, detailId: id });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      onBack: () => {
        setViewState({ ...viewState, detailId: undefined });
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
      <Navbar viewState={viewState} setViewState={setViewState} />
      <main className="pt-[80px] min-h-screen">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
    </div>
  );
}
