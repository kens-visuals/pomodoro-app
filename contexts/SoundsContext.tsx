import { createContext, useMemo, useState } from 'react';
import useSound from 'use-sound';

// Types
import { SoundsContextTypes } from '../types/index';

export const SoundsContext = createContext<SoundsContextTypes>({
  volume: 0,
  setVolume: () => null,
  playBiteSfx: () => null,
  playSwitchOnSfx: () => null,
  playSwitchOffSfx: () => null,
  finishedSfx: () => null,
  playActiveSfx: () => null,
  playPopOnSfc: () => null,
  playPopOffSfx: () => null,
  resetSfx: () => null,
  playToggleSfx: () => null,
  enableSfx: () => null,
  disableSfx: () => null,
});

export function SoundsProvider({ children }: { children: JSX.Element }) {
  const [volume, setVolume] = useState(0);
  const [playBiteSfx] = useSound('/sounds/bite.mp3', { volume });
  const [playSwitchOnSfx] = useSound('/sounds/switch-on.mp3', { volume });
  const [playSwitchOffSfx] = useSound('/sounds/switch-off.mp3', { volume });
  const [finishedSfx] = useSound('/sounds/finish.mp3', { volume });
  const [playActiveSfx] = useSound('/sounds/pop-down.mp3', { volume });
  const [playPopOnSfc] = useSound('/sounds/pop-on.mp3', { volume });
  const [playPopOffSfx] = useSound('/sounds/pop-off.mp3', { volume });
  const [resetSfx] = useSound('/sounds/reset.mp3', { volume });
  const [playToggleSfx] = useSound('/sounds/toggle.mp3', { volume });
  const [enableSfx] = useSound('/sounds/enable.mp3');
  const [disableSfx] = useSound('/sounds/disable.mp3');

  const value = useMemo(
    () => ({
      volume,
      setVolume,
      playBiteSfx,
      playSwitchOnSfx,
      playSwitchOffSfx,
      finishedSfx,
      playActiveSfx,
      playPopOnSfc,
      playPopOffSfx,
      resetSfx,
      playToggleSfx,
      enableSfx,
      disableSfx,
    }),
    [volume]
  );

  return (
    <SoundsContext.Provider value={value}>{children}</SoundsContext.Provider>
  );
}
