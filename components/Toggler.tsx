import { useContext, useState } from 'react';
import { RadioGroup } from '@headlessui/react';

// Context
import { StyleContext } from '../contexts/StyleContext';

interface TimeOptionTypes {
  id: number;
  value: string;
}

export default function Toggler() {
  const { color } = useContext(StyleContext);

  const [timeOption, setTimeOption] = useState('pomodoro');

  const activeColor: string =
    // eslint-disable-next-line no-nested-ternary
    color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-violet';

  const timeOptions: TimeOptionTypes[] = [
    { id: 1, value: 'pomodoro' },
    { id: 2, value: 'long break' },
    { id: 3, value: 'short break' },
  ];

  return (
    <RadioGroup
      value={timeOption}
      onChange={setTimeOption}
      className='m-11 grid w-full grid-cols-3 items-center justify-center gap-4 rounded-full bg-primary-dark p-2 text-body-2'
    >
      {timeOptions.map(({ id, value }) => (
        <RadioGroup.Option value={value} key={id} className='w-full space-x-10'>
          {({ checked }) => (
            <span
              className={`flex w-full items-center justify-center rounded-full py-4 text-center  ${
                checked ? `${activeColor} text-primary-dark` : `text-tertiary`
              }`}
            >
              {value}
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
