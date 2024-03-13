import { useState } from 'react';
import { useDevMode } from '~/contexts/devModeContext';
import styles from '~/styles/home.css';

export const Header = () => {
  const { devMode, toggleDevMode } = useDevMode();

  return (
    <header className="bg-gray-800 text-white shadow fixed top-0 left-0 right-0 z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex items-center space-x-2 text-2xl font-bold mr-6 ml-10">
                <span>Figluu</span>
              </a>
            </div>
          </div>

          <nav className="flex items-center justify-center flex-grow">
            <div className="flex items-baseline space-x-4">
              <div className="px-1 py-2 text-sm font-medium text-gray-300">
                Ryan's Portfolio
              </div>

              <div className="py-2 text-sm font-medium">/</div>

              {devMode ? (
                <div className="px-1 py-2 rounded-md text-sm font-medium">
                  Dev Mode
                </div>
              ) : (
                <div className="px-1 py-2 rounded-md text-sm font-medium">
                  Des Mode
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="px-1 py-2 text-sm font-medium text-gray-300">
                <span>Resume</span>
              </a>
            </div>

            <div className="flex-shrink-0 px-2">
              <a
                href="https://www.linkedin.com/in/ryanluu261/"
                className="px-1 py-2 text-sm font-medium text-gray-300">
                <span>Linkedin</span>
              </a>
            </div>

            <div className="w-8 mr-8">
              <input
                type="checkbox"
                id="toggle-button"
                className="toggle-button"
                checked={!devMode}
                onChange={toggleDevMode}
              />
              <label htmlFor="toggle-button" className="toggle-label"></label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
