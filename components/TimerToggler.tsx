import { useContext, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import useSound from 'use-sound';

// Context
import { StyleContext } from '../contexts/StyleContext';
import { TimerContext } from '../contexts/TimerContext';

// Types
import { TimeOptionTypes } from '../types/index';

export default function TimerToggler() {
  const { color } = useContext(StyleContext);
  const {
    timeOption,
    setTimeOption,
    handleStopClick,
    handleResetClick,
    timerDuration,
  } = useContext(TimerContext);
  const [playToggleSfx] = useSound('/sounds/toggle.mp3', { volume: 1 });

  const activeColor: string =
    // eslint-disable-next-line no-nested-ternary
    color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-violet';

  const timeOptions: TimeOptionTypes[] = [
    { id: 1, name: 'pomodoro', value: 'pomodoro' },
    { id: 2, name: 'short break', value: 'shortBreak' },
    { id: 3, name: 'long break', value: 'longBreak' },
  ];

  useEffect(() => {
    handleResetClick();
    handleStopClick();
  }, [timerDuration, timeOption]);

  return (
    <RadioGroup
      value={timeOption}
      onChange={setTimeOption}
      className='m-11 grid w-full grid-cols-3 items-center justify-between gap-4 rounded-full bg-primary-dark p-2 text-body-2 tracking-wide'
    >
      {timeOptions.map(({ id, name, value }) => (
        <RadioGroup.Option value={value} key={id} className='w-full'>
          {({ checked }) => (
            <button
              type='button'
              onClick={() => playToggleSfx()}
              className={`flex w-full items-center justify-center rounded-full py-4 text-center md:text-base ${
                checked ? `${activeColor} text-primary-dark` : `text-tertiary`
              }`}
            >
              {name}
            </button>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
