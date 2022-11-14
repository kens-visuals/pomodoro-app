import { useContext } from 'react';

// Context
import { TimerContext } from '../contexts/TimerContext';
import { SoundsContext } from '../contexts/SoundsContext';

// Utils
import { convertSecondsToMinutes } from '../utils/helpers';

export default function TimerDisplay({
  remainingTime,
}: {
  remainingTime: number;
}) {
  const { isPlaying, handlePauseClick, handleResetClick } =
    useContext(TimerContext);
  const { playActiveSfx, playPopOnSfc, playPopOffSfx, resetSfx } =
    useContext(SoundsContext);

  return (
    <div className='flex flex-col items-center justify-center'>
      <button
        type='button'
        className='ml-4 text-h3 uppercase text-tertiary focus:outline-dashed focus:outline-tertiary md:text-h2'
        onClick={handlePauseClick}
        onKeyDown={(e) => e.key === 'Enter' && playActiveSfx()}
        onKeyUp={(e) =>
          e.key === 'Enter' && (isPlaying ? playPopOnSfc() : playPopOffSfx())
        }
        onMouseDown={() => playActiveSfx()}
        onMouseUp={() => (isPlaying ? playPopOnSfc() : playPopOffSfx())}
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
        className='ml-4 text-h3 uppercase text-red focus:outline-dashed focus:outline-tertiary md:text-h2'
        onClick={() => {
          handleResetClick();
          resetSfx();
        }}
      >
        Reset
      </button>
    </div>
  );
}
