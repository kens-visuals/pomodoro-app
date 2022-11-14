import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import useSound from 'use-sound';

// Context
import { StyleContext } from '../contexts/StyleContext';
import { TimerContext } from '../contexts/TimerContext';

// Components
import TimerDisplay from './TimerDisplay';

// Utils
import { convertMinutesToSeconds } from '../utils/helpers';

export default function Timer() {
  const { color } = useContext(StyleContext);
  const { isPlaying, resetKey, handleOnComplete, timerDuration, timeOption } =
    useContext(TimerContext);
  const [finishedSfx] = useSound('/sounds/finish.mp3', { volume: 1 });

  const activeColor: string =
    // eslint-disable-next-line no-nested-ternary
    color === 'red' ? 'F87070' : color === 'cyan' ? '70F3F8' : 'D881F8';

  const convertedDuration = convertMinutesToSeconds(+timerDuration[timeOption]);

  return (
    <div className='my-12 flex aspect-square items-center justify-center rounded-full bg-primary-gradient p-4 shadow-primary-shadow md:p-6'>
      {/* Mobile Version */}
      <div className='flex h-full w-full items-center justify-center rounded-full bg-primary-dark md:hidden'>
        <CountdownCircleTimer
          key={resetKey}
          rotation='counterclockwise'
          isPlaying={isPlaying}
          duration={convertedDuration}
          colors={`#${activeColor}`}
          trailColor='#161932'
          size={300}
          onComplete={() => {
            handleOnComplete();
            finishedSfx();
          }}
        >
          {({ remainingTime }) => (
            <TimerDisplay remainingTime={remainingTime} />
          )}
        </CountdownCircleTimer>
      </div>

      {/* Tablet and Desktop Version */}
      <div className='hidden md:flex md:items-center md:justify-center md:rounded-full md:bg-primary-dark'>
        <CountdownCircleTimer
          key={resetKey}
          rotation='counterclockwise'
          isPlaying={isPlaying}
          duration={convertedDuration}
          colors={`#${activeColor}`}
          trailColor='#161932'
          size={450}
          onComplete={() => {
            handleOnComplete();
            finishedSfx();
          }}
        >
          {({ remainingTime }) => (
            <TimerDisplay remainingTime={remainingTime} />
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
