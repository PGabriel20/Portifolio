import Link from 'next/link';
import { HtmlHTMLAttributes, useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggler from './ThemeToggler';
import { useRouter } from 'next/router';
import { NavLink } from '../../../types/header';

interface IDropdown extends HtmlHTMLAttributes<HTMLDivElement> {
  links: Array<NavLink>;
}

const Dropdown: React.FC<IDropdown> = ({ links, ...rest }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, isDropdownOpen]);

  return (
    <ClickAwayListener onClickAway={() => setIsDropdownOpen(false)}>
      <div className='relative' {...rest}>
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
              {links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.to}
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='py-2 px-4 flex'>
              <ThemeToggler className='block' />
            </div>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
