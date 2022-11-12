import { useContext } from 'react';

// Context
import { TimerContext } from '../contexts/TimerContext';

// Utils
import { convertSecondsToMinutes } from '../utils/helpers';

export default function TimerDisplay({
  remainingTime,
}: {
  remainingTime: number;
}) {
  const { isPlaying, handlePauseClick, handleResetClick } =
    useContext(TimerContext);

  return (
    <div className='flex flex-col items-center justify-center'>
      <button
        type='button'
        className='ml-4 text-h3 uppercase text-tertiary md:text-h2'
        onClick={handlePauseClick}
      >
        {isPlaying ? 'Pause' : 'Start'}
      </button>
      <span
        className='my-4 text-[5rem] text-tertiary md:text-[8rem]'
        role='timer'
        aria-live='assertive'
      >
        {convertSecondsToMinutes(remainingTime)}
      </span>

      <button
        type='button'
        className='ml-4 text-h3 uppercase text-red md:text-h2'
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
}
