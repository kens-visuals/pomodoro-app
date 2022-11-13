import { useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import useSound from 'use-sound';

// Context
import { StyleContext } from '../contexts/StyleContext';

// Types
import { StyleItemTypes } from '../types/index';

export default function FontsList() {
  const { font, setFont } = useContext(StyleContext);
  const [playBiteSfx] = useSound('/sounds/bite.mp3', { volume: 1 });

  const fontOptions: StyleItemTypes[] = [
    { id: 1, value: 'font-kumbh-sans' },
    { id: 2, value: 'font-roboto-slab' },
    { id: 3, value: 'font-space-mono' },
  ];

  return (
    <div className='flex flex-col items-center justify-between gap-4 border-t border-tertiary py-4 md:flex-row'>
      <span>Fonts</span>

      <RadioGroup
        value={font}
        onChange={setFont}
        className='flex items-center justify-end gap-4'
      >
        {fontOptions.map(({ id, value }) => (
          <RadioGroup.Option value={value} key={id}>
            {({ checked }) => (
              <button
                type='button'
                onClick={() => playBiteSfx()}
                className={`flex h-10 w-10 items-center justify-center rounded-full ${value} ${
                  checked
                    ? 'bg-primary-dark text-tertiary'
                    : 'bg-secondary-dark'
                }`}
              >
                Aa
              </button>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
}
