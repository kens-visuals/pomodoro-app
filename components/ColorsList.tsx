import { useContext } from 'react';
import { RadioGroup } from '@headlessui/react';

// Context
import { StyleContext } from '../contexts/StyleContext';

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
    <RadioGroup value={color} onChange={setColor}>
      {colorOptions.map(({ id, value }) => (
        <RadioGroup.Option value={value} key={id}>
          {({ checked }) => (
            <span className={`${checked && 'bg-red text-secondary'}`}>
              {value}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
