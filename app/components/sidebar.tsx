import { HashtagIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';
import { Link } from '@remix-run/react';
import { useState } from 'react';
import { useDevMode } from '~/contexts/devModeContext';

function Sidebar() {
  const [activeMenus, setActiveMenus] = useState({});
  const { devMode } = useDevMode();

  const toggleMenu = (menu) => {
    setActiveMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu], // Toggle the boolean value for the menu
    }));
  };

  const menuItems = devMode
    ? [
        { name: 'Dev Page 1', key: 1 },
        { name: 'Dev Page 2', key: 2 },
      ]
    : [
        { name: 'Des Page 1', key: 1 },
        { name: 'Des Page 2', key: 2 },
      ];

  return (
    <div className="sidebar bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out h-screen">
      <nav>
        {menuItems.map((page) => (
          <div className="group" onClick={() => toggleMenu(page.name)}>
            <div className="flex items-center py-3 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white cursor-pointer">
              <div className="opacity-0 group-hover:opacity-100 transition duration-200 mt-3">
                <PlayIcon
                  className={`w-3 transform ${
                    activeMenus[page.name] ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </div>
              <HashtagIcon className="w-4 ml-2 mr-2" />
              {!devMode && page.key === 1 ? (
                <Link to="/poster1" className=" font-medium">
                  {page.name}
                </Link>
              ) : (
                <span>{page.name}</span>
              )}
            </div>
            {activeMenus[page.name] && (
              <div className="ml-[3.8rem]">
                <a
                  href="#"
                  className="block pb-2 text-sm transition duration-200 hover:text-gray-200">
                  Sub-item 1
                </a>
                <a
                  href="#"
                  className="block py-1 text-sm transition duration-200 hover:text-gray-200">
                  Sub-item 2
                </a>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
