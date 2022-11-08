import { useContext, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// Context
import { StyleContext } from '../contexts/StyleContext';

// Components
import TimerDisplay from './TimerDisplay';

export default function Timer() {
  const { color } = useContext(StyleContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const activeColor: string =
    // eslint-disable-next-line no-nested-ternary
    color === 'red' ? 'F87070' : color === 'cyan' ? '70F3F8' : 'D881F8';

  return (
    <div className='my-12 flex aspect-square w-full items-center justify-center rounded-full bg-primary-gradient p-4 shadow-primary-shadow'>
      <div className='flex h-full w-full items-center justify-center rounded-full bg-primary-dark'>
        <CountdownCircleTimer
          key={resetKey}
          rotation='counterclockwise'
          isPlaying={isPlaying}
          duration={10}
          colors={`#${activeColor}`}
          trailColor='#161932'
          size={300}
        >
          {({ remainingTime }) => (
            <TimerDisplay
              isPlaying={isPlaying}
              setResetKey={setResetKey}
              setIsPlaying={setIsPlaying}
              remainingTime={remainingTime}
            />
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
