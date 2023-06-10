import Link from 'next/link';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { FiMenu, FiX } from 'react-icons/fi';
import { UIComponent } from '../../../types/component';

type IDropdown = UIComponent;

const Dropdown: React.FC<IDropdown> = ({ className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsDropdownOpen(false)}>
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className='dark:text-white text-gray-700 text-2xl'
          type='button'
        >
          {isDropdownOpen ? <FiX /> : <FiMenu />}
        </button>

        {isDropdownOpen && (
          <div className='absolute right-0 left-auto z-10 bg-white divide-y rounded-lg shadow w-44 dark:bg-dark-card'>
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 font-medium'>
              <li>
                <Link
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
