import { useContext } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

// Context
import { TimerContext } from '../contexts/TimerContext';
import { SoundsContext } from '../contexts/SoundsContext';

// Utils
import { convertSecondsToMinutes } from '../utils/helpers';

export default function TimerDisplay({
  remainingTime,
}: {
  remainingTime: number;
}) {
  const { isPlaying, handlePauseClick, handleOnComplete } =
    useContext(TimerContext);
  const { playActiveSfx, playPopOnSfc, playPopOffSfx, resetSfx } =
    useContext(SoundsContext);

  const groupVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.2,
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  };

  const buttonVariants: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={groupVariants}
        className='flex flex-col items-center justify-center'
      >
        <motion.button
          type='button'
          variants={buttonVariants}
          className='ml-4 text-h3 uppercase text-tertiary transition-colors duration-300 hover:text-secondary focus:outline-dashed focus:outline-tertiary md:text-h2'
          onClick={handlePauseClick}
          onKeyDown={(e) => e.key === 'Enter' && playActiveSfx()}
          onKeyUp={(e) =>
            e.key === 'Enter' && (isPlaying ? playPopOnSfc() : playPopOffSfx())
          }
          onMouseDown={() => playActiveSfx()}
          onMouseUp={() => (isPlaying ? playPopOnSfc() : playPopOffSfx())}
        >
          {isPlaying ? 'Pause' : 'Start'}
        </motion.button>
        <motion.span
          variants={buttonVariants}
          className='my-4 text-[5rem] text-tertiary md:text-[8rem] '
          role='timer'
          aria-live='assertive'
        >
          {convertSecondsToMinutes(remainingTime)}
        </motion.span>

        <motion.button
          variants={buttonVariants}
          type='button'
          className='ml-4 text-h3 uppercase text-red transition-colors duration-300 hover:text-secondary focus:outline-dashed focus:outline-tertiary md:text-h2'
          onClick={() => {
            handleOnComplete();
            resetSfx();
          }}
        >
          Reset
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
