import { useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';

// Context
import { StyleContext } from '../contexts/StyleContext';
import { SoundsContext } from '../contexts/SoundsContext';

// Assets
import checkmark from '../public/assets/icon-checkmark.svg';

// Types
import { StyleItemTypes } from '../types/index';

export default function FontsList() {
  const { color, setColor } = useContext(StyleContext);
  const { playBiteSfx } = useContext(SoundsContext);

  const colorOptions: StyleItemTypes[] = [
    { id: 1, value: 'red' },
    { id: 2, value: 'cyan' },
    { id: 3, value: 'violet' },
  ];

  return (
    <div className='flex flex-col items-center justify-between gap-4 border-t border-tertiary py-4 md:flex-row'>
      <span>Colors</span>

      <RadioGroup
        value={color}
        onChange={setColor}
        className='flex items-center justify-end gap-4'
      >
        {colorOptions.map(({ id, value }) => (
          <RadioGroup.Option
            value={value}
            key={id}
            className='focus:rounded-full focus:outline-dashed focus:outline-primary-dark'
          >
            {({ checked }) => (
              <button
                type='button'
                onClick={() => playBiteSfx()}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:ring-1 hover:ring-tertiary hover:ring-offset-4 focus:rounded-full focus:outline-dashed focus:outline-primary-dark bg-${value}`}
              >
                {checked && (
                  <Image src={checkmark} alt='checkmark' className='h-6 w-6' />
                )}
              </button>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
}
