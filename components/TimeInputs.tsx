import Image from 'next/image';
import { useContext, ChangeEvent } from 'react';

// Contexts
import { TimerContext } from '../contexts/TimerContext';
import { StyleContext } from '../contexts/StyleContext';

// Assets
import arrowUp from '../public/assets/icon-arrow-up.svg';
import arrowDown from '../public/assets/icon-arrow-down.svg';

// Types
import { TimeOptionTypes } from '../types/index';

export default function TimeInputs() {
  const { font } = useContext(StyleContext);
  const { timerDuration, setTimerDuration } = useContext(TimerContext);

  const handleTimerDurationChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTimerDuration((prevState: any) => ({
      ...prevState,
      [e.target.name]: +e.target.value,
    }));

  const timeOptions: TimeOptionTypes[] = [
    { name: 'pomodoro', value: timerDuration.pomodoro, min: 5, max: 90 },
    { name: 'short break', value: timerDuration.shortBreak, min: 1, max: 30 },
    { name: 'long break', value: timerDuration.longBreak, min: 5, max: 60 },
  ];

  const inputsDisplay = timeOptions.map(({ name, value, min, max }) => (
    <label
      key={name}
      htmlFor='timer-duration'
      className={`relative flex items-center justify-between text-primary/50 md:flex-col md:items-start md:gap-2 ${font}`}
    >
      {name}

      <input
        min={min}
        max={max}
        type='number'
        name={name}
        id='timer-duration'
        value={value}
        onChange={(e) => handleTimerDurationChange(e)}
        className='relative w-36 appearance-none rounded-lg bg-secondary-dark p-2'
      />
      <button type='button' className='absolute right-0'>
        <Image src={arrowUp} alt='' />
      </button>
      <button type='button' className='absolute right-0'>
        <Image src={arrowDown} alt='' />
      </button>
    </label>
  ));

  return (
    <form className=' space-y-4 p-6 md:flex md:items-center md:gap-4 md:space-y-0'>
      {inputsDisplay}
    </form>
  );
}
