import { ChangeEvent, ForwardRefRenderFunction, forwardRef } from 'react';
import { UIComponent } from '../../../types/component';

interface ISwitch extends UIComponent {
  label?: string;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: ForwardRefRenderFunction<HTMLInputElement, ISwitch> = (
  { label, checked, onChange, className, ...rest },
  ref,
) => {
  return (
    <div className={`${className}`}>
      <label className='relative inline-flex items-center mb-4 cursor-pointer'>
        <input
          type='checkbox'
          className='sr-only peer'
          checked={checked}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        {label && (
          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>{label}</span>
        )}
      </label>
    </div>
  );
};

export default forwardRef<HTMLInputElement, ISwitch>(Switch);
