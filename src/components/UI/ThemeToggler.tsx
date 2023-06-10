import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { UIComponent } from '../../../types/component';

type IThemeToggler = UIComponent;

const ThemeToggler: React.FC<IThemeToggler> = ({ className, ...rest }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`text-2xl cursor-pointer ${className}`}
      type='button'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...rest}
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeToggler;
