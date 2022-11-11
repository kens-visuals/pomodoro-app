export const padTo2Digits = (num: number): string =>
  num.toString().padStart(2, '0');

export const convertMinutesToSeconds = (mins: number): number =>
  Math.floor(mins * 60);

export const convertSecondsToMinutes = (remainingTime: number): string => {
  const minutes = Math.floor(remainingTime / 60);
  const extraSeconds = remainingTime % 60;

  return `${padTo2Digits(minutes)}:${padTo2Digits(extraSeconds)}`;
};
