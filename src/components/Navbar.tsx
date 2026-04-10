import { Page, ViewState } from '../App';

interface NavbarProps {
  viewState: ViewState;
  setViewState: (state: ViewState) => void;
}

export default function Navbar({ viewState, setViewState }: NavbarProps) {
  const links: Page[] = ['Home', 'Technical Projects', 'Hands-on Projects', 'Art', 'Extra Curriculum', 'Experience', 'Contact me'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] text-white border-b border-gray-800 h-[80px] flex flex-col justify-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center w-full">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setViewState({ page: link });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-sm whitespace-nowrap transition-colors pb-2 border-b-2 ${
                  viewState.page === link ? 'text-white font-medium border-white' : 'text-gray-400 hover:text-gray-200 border-transparent'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
