import { useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';

// Context
import { StyleContext } from '../contexts/StyleContext';

// Assets
import checkmark from '../public/assets/icon-checkmark.svg';

// Interfaces
interface StyleItemTypes {
  id: number;
  value: string;
}

export default function FontsList() {
  const { color, setColor } = useContext(StyleContext);

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
              <div
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
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
}
