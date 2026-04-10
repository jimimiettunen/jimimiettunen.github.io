import { motion } from 'motion/react';

export interface PhotoCredit {
  subject: string;
  photographer: string;
}

interface FooterProps {
  credits?: PhotoCredit[];
  theme?: 'dark' | 'light';
}

export default function Footer({ credits = [], theme = 'dark' }: FooterProps) {
  // Sort the credits alphabetically by photographer name
  const sortedCredits = [...credits].sort((a, b) => 
    a.photographer.localeCompare(b.photographer)
  );

  const isLight = theme === 'light';

  return (
    <footer className={`w-full py-12 px-4 sm:px-6 lg:px-8 mt-auto z-10 relative border-t ${isLight ? 'bg-white border-gray-200' : 'bg-transparent border-white/10'}`}>
      <div className="max-w-5xl mx-auto text-center">
        {sortedCredits.length > 0 && (
          <>
            <h3 className={`text-xs font-bold tracking-widest uppercase mb-6 ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
              Photography Credits
            </h3>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
              {sortedCredits.map((credit, index) => (
                <div key={index} className="text-sm font-light">
                  <span className={isLight ? 'text-gray-600' : 'text-gray-400'}>{credit.subject}</span>
                  <span className={`mx-2 ${isLight ? 'text-gray-300' : 'text-gray-700'}`}>|</span>
                  <span className={isLight ? 'text-gray-900' : 'text-gray-200'}>{credit.photographer}</span>
                </div>
              ))}
            </div>
          </>
        )}

        <div className={`text-xs font-light ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>
          © {new Date().getFullYear()} Jimi Miettunen.
        </div>
      </div>
    </footer>
  );
}
