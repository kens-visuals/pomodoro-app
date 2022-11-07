import { useContext } from 'react';
import { RadioGroup } from '@headlessui/react';

import { StyleContext } from '../contexts/StyleContext';

// Interfaces
interface StyleItemTypes {
  id: number;
  value: string;
}

export default function FontsList() {
  const { color, setColor } = useContext(StyleContext);

  const colorOptions: StyleItemTypes[] = [
    { id: 1, value: 'text-red' },
    { id: 2, value: 'text-cyan' },
    { id: 3, value: 'text-violet' },
  ];

  return (
    <RadioGroup value={color} onChange={setColor}>
      {colorOptions.map(({ id, value }) => (
        <RadioGroup.Option value={value} key={id}>
          {({ checked }) => (
            <span className={`${checked ? 'bg-red text-secondary' : ''}`}>
              {value}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
