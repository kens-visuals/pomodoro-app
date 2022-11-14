import { createContext, useMemo, useState } from 'react';
import useSound from 'use-sound';

// Types
import { SoundsContextTypes } from '../types/index';

export const SoundsContext = createContext<SoundsContextTypes>({
  volume: 1,
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
});

export function SoundsProvider({ children }: { children: JSX.Element }) {
  const [volume, setVolume] = useState(1);
  const [playBiteSfx] = useSound('/sounds/bite.mp3', { volume });
  const [playSwitchOnSfx] = useSound('/sounds/switch-on.mp3', { volume });
  const [playSwitchOffSfx] = useSound('/sounds/switch-off.mp3', { volume });
  const [finishedSfx] = useSound('/sounds/finish.mp3', { volume });
  const [playActiveSfx] = useSound('/sounds/pop-down.mp3', { volume });
  const [playPopOnSfc] = useSound('/sounds/pop-on.mp3', { volume });
  const [playPopOffSfx] = useSound('/sounds/pop-off.mp3', { volume });
  const [resetSfx] = useSound('/sounds/reset.mp3', { volume });
  const [playToggleSfx] = useSound('/sounds/toggle.mp3', { volume });

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
    }),
    [volume]
  );

  return (
    <SoundsContext.Provider value={value}>{children}</SoundsContext.Provider>
  );
}
