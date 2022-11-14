export interface StyleItemTypes {
  id: number;
  value: string;
}

export interface TimeOptionTypes {
  id?: number;
  name: string;
  valueName?: string;
  value: string | number;
}

export interface StyleContextTypes {
  color: string;
  setColor: (color: string) => void;
  font: string;
  setFont: (font: string) => void;
}

export interface TimerDuration {
  [key: string]: string | number;
}

export interface TimerContextTypes {
  timerDuration: TimerDuration;
  setTimerDuration: (duration: any) => void;
  timeOption: string;
  setTimeOption: (timeOption: string) => void;
  isPlaying: boolean;
  resetKey: number;
  setResetKey: (resetKey: any) => void;
  handleStopClick: () => void;
  handlePauseClick: () => void;
  handleResetClick: () => void;
  handleOnComplete: () => void;
}

export interface SoundsContextTypes {
  volume: number;
  setVolume: (volume: number) => void;
  playBiteSfx: () => void;
  playSwitchOnSfx: () => void;
  playSwitchOffSfx: () => void;
  finishedSfx: () => void;
  playActiveSfx: () => void;
  playPopOnSfc: () => void;
  playPopOffSfx: () => void;
  resetSfx: () => void;
  playToggleSfx: () => void;
}
