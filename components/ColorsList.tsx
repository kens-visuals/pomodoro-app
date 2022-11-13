import { useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import useSound from 'use-sound';
import Image from 'next/image';

// Context
import { StyleContext } from '../contexts/StyleContext';

// Assets
import checkmark from '../public/assets/icon-checkmark.svg';

// Types
import { StyleItemTypes } from '../types/index';

export default function FontsList() {
  const { color, setColor } = useContext(StyleContext);
  const [playBiteSfx] = useSound('/sounds/bite.mp3', { volume: 1 });

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
          <RadioGroup.Option value={value} key={id}>
            {({ checked }) => (
              <button
                type='button'
                onClick={() => playBiteSfx()}
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-${value}`}
              >
                {checked && (
                  <Image
                    src={checkmark}
                    alt='checkmark'
                    height={25}
                    width={25}
                  />
                )}
              </button>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
}
