import { useContext, ChangeEvent } from 'react';
import { TimerContext } from '../contexts/TimerContext';

export default function TimeInputs() {
  const { timerDuration, setTimerDuration } = useContext(TimerContext);

  const handleTimerDurationChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTimerDuration((prevState: any) => ({
      ...prevState,
      [e.target.name]: +e.target.value,
    }));

  return (
    <form>
      <label
        htmlFor='timer-duration'
        className='flex items-center justify-between'
      >
        pomodoro
        <input
          min={5}
          max={90}
          type='number'
          name='pomodoro'
          id='timer-duration'
          value={timerDuration.pomodoro}
          onChange={(e) => handleTimerDurationChange(e)}
        />
      </label>
      <label
        htmlFor='timer-duration'
        className='flex items-center justify-between'
      >
        short break
        <input
          min={1}
          max={30}
          type='number'
          name='shortBreak'
          id='timer-duration'
          value={timerDuration.shortBreak}
          onChange={(e) => handleTimerDurationChange(e)}
        />
      </label>
      <label
        htmlFor='timer-duration'
        className='flex items-center justify-between'
      >
        long break
        <input
          min={5}
          max={60}
          type='number'
          name='longBreak'
          id='timer-duration'
          value={timerDuration.longBreak}
          onChange={(e) => handleTimerDurationChange(e)}
        />
      </label>
    </form>
  );
}
