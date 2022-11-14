import { useContext, ChangeEvent } from 'react';

// Contexts
import { TimerContext } from '../contexts/TimerContext';
import { StyleContext } from '../contexts/StyleContext';
import { SoundsContext } from '../contexts/SoundsContext';

// Types
import { TimeOptionTypes } from '../types/index';

export default function TimeInputs() {
  const { font } = useContext(StyleContext);
  const { timerDuration, setTimerDuration } = useContext(TimerContext);
  const { playSwitchOnSfx } = useContext(SoundsContext);

  const handleTimerDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const result: number = +value.replace(/\D/g, '');

    setTimerDuration((prevState: TimeOptionTypes) => ({
      ...prevState,
      [name]: result,
    }));

    playSwitchOnSfx();
  };

  const timeOptions: TimeOptionTypes[] = [
    {
      name: 'pomodoro',
      valueName: 'pomodoro',
      value: timerDuration.pomodoro,
    },
    {
      name: 'short break',
      valueName: 'shortBreak',
      value: timerDuration.shortBreak,
    },
    {
      name: 'long break',
      valueName: 'longBreak',
      value: timerDuration.longBreak,
    },
  ];

  const inputsDisplay = timeOptions.map(({ name, valueName, value }) => (
    <label
      key={name}
      htmlFor='timer-duration'
      className={`relative flex items-center justify-between text-primary/50 md:flex-col md:items-start md:gap-2 ${font}`}
    >
      {name}

      <input
        type='number'
        name={valueName}
        pattern='[0-9]*'
        id='timer-duration'
        value={value}
        onChange={(e) => handleTimerDurationChange(e)}
        className='relative w-36 appearance-none rounded-lg bg-secondary-dark p-2 focus:outline-dashed focus:outline-primary-dark'
      />
    </label>
  ));

  return (
    <form className='space-y-4 py-6 md:flex md:items-center md:gap-4 md:space-y-0'>
      {inputsDisplay}
    </form>
  );
}
