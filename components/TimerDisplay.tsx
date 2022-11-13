import { useContext } from 'react';
import useSound from 'use-sound';

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
  const [playActiveSfx] = useSound('/sounds/pop-down.mp3', { volume: 0.5 });
  const [playOnSfc] = useSound('/sounds/pop-on.mp3', { volume: 0.5 });
  const [playOffSfx] = useSound('/sounds/pop-off.mp3', { volume: 0.5 });
  const [resetSfx] = useSound('/sounds/reset.mp3', { volume: 1 });

  return (
    <div className='flex flex-col items-center justify-center'>
      <button
        type='button'
        className='ml-4 text-h3 uppercase text-tertiary md:text-h2'
        onClick={handlePauseClick}
        onMouseDown={() => playActiveSfx()}
        onMouseUp={() => (isPlaying ? playOnSfc() : playOffSfx())}
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
