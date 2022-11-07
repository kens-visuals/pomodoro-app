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
  const { font, setFont } = useContext(StyleContext);

  const fontOptions: StyleItemTypes[] = [
    { id: 1, value: 'font-kumbh-sans' },
    { id: 2, value: 'font-roboto-slab' },
    { id: 3, value: 'font-space-mono' },
  ];

  return (
    <RadioGroup value={font} onChange={setFont}>
      {fontOptions.map(({ id, value }) => (
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
