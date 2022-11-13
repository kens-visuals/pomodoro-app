import { useState, createContext, useMemo } from 'react';

// Types
import { TimerDuration, TimerContextTypes } from '../types/index';

export const TimerContext = createContext<TimerContextTypes>({
  timerDuration: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
  setTimerDuration: () => null,
  timeOption: 'pomodoro',
  setTimeOption: () => null,
  isPlaying: false,
  resetKey: 0,
  setResetKey: () => null,
  handleStopClick: () => null,
  handlePauseClick: () => null,
  handleResetClick: () => null,
  handleOnComplete: () => null,
});

export function TimerProvider({ children }: { children: JSX.Element }) {
  const [timeOption, setTimeOption] = useState('pomodoro');
  const [timerDuration, setTimerDuration] = useState<TimerDuration>({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handleStopClick = () => setIsPlaying(false);
  const handlePauseClick = () => setIsPlaying((prevState: any) => !prevState);
  const handleResetClick = () => setResetKey((prevKey: any) => prevKey + 1);
  const handleOnComplete = () => {
    handleResetClick();
    handleStopClick();
  };

  const value: TimerContextTypes = useMemo(
    () => ({
      timerDuration,
      setTimerDuration,
      timeOption,
      setTimeOption,
      isPlaying,
      handlePauseClick,
      resetKey,
      setResetKey,
      handleResetClick,
      handleOnComplete,
      handleStopClick,
    }),
    [timerDuration, timeOption, isPlaying, resetKey]
  );

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}
