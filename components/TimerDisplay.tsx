import { convertSecondsToMinutes } from '../utils/helpers';

interface TimerDisplayProps {
  setIsPlaying: (value: any) => void;
  setResetKey: (value: any) => void;
  remainingTime: number;
  isPlaying: boolean;
}

export default function TimerDisplay({
  setIsPlaying,
  setResetKey,
  remainingTime,
  isPlaying,
}: TimerDisplayProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <button
        type='button'
        className='ml-4 text-h3 uppercase text-tertiary '
        onClick={() => setIsPlaying((prevState: boolean) => !prevState)}
      >
        {isPlaying ? 'Pause' : 'Start'}
      </button>
      <span
        className='my-4 text-[5rem] text-tertiary'
        role='timer'
        aria-live='assertive'
      >
        {convertSecondsToMinutes(remainingTime)}
      </span>

      <button
        type='button'
        className='ml-4 text-h3 uppercase text-red'
        onClick={() => setResetKey((prevKey: number) => prevKey + 1)}
      >
        Reset
      </button>
    </div>
  );
}
