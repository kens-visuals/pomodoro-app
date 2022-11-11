import { useContext, ChangeEvent } from 'react';

// Contexts
import { TimerContext } from '../contexts/TimerContext';
import { StyleContext } from '../contexts/StyleContext';

interface TimeOptionTypes {
  name: string;
  value: string | number;
  min: number;
  max: number;
}

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
      className={`flex items-center justify-between text-primary/50 md:flex-col md:items-start md:gap-2 ${font}`}
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
        className='w-36 appearance-none rounded-lg bg-secondary-dark p-2'
      />
    </label>
  ));

  return (
    <form className=' space-y-4 p-6 md:flex md:items-center md:gap-4 md:space-y-0'>
      {inputsDisplay}
    </form>
  );
}
