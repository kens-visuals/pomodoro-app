import { useState, createContext, useMemo } from 'react';

// Interfaces
interface StyleContextTypes {
  color: string;
  setColor: (color: string) => void;
  font: string;
  setFont: (font: string) => void;
}

export const StyleContext = createContext<StyleContextTypes>({
  color: 'red',
  setColor: () => null,
  font: 'font-kumbh-sans',
  setFont: () => null,
});

export function StyleProvider({ children }: { children: JSX.Element }) {
  const [color, setColor] = useState<string>('red');

  const [font, setFont] = useState<string>('font-kumbh-sans');

  const value: StyleContextTypes = useMemo(
    () => ({ color, setColor, font, setFont }),
    [color, font]
  );

  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
}
