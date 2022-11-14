import { useState, useContext } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

// Context
import { StyleContext } from '../contexts/StyleContext';
import { SoundsContext } from '../contexts/SoundsContext';

// Components
import TimeInputs from './TimeInputs';
import FontsList from './FontsList';
import ColorsList from './ColorsList';

// Assets
import settingsIcon from '../public/assets/icon-settings.svg';
import closeIcon from '../public/assets/icon-close.svg';
import volumeIcon from '../public/assets/icon-volume.svg';
import muteIcon from '../public/assets/icon-mute.svg';

export default function Settings() {
  const { font } = useContext(StyleContext);
  const { volume, setVolume, playSwitchOnSfx, playSwitchOffSfx, enableSfx } =
    useContext(SoundsContext);
  const [isOpen, setIsOpen] = useState(false);

  const handelOpen = () => {
    playSwitchOnSfx();
    setIsOpen(true);
  };

  const handleClose = () => {
    playSwitchOffSfx();
    setIsOpen(false);
  };

  const handleVolumeOn = () => {
    setVolume(1);
    enableSfx();
  };

  const handleVolumeOff = () => {
    setVolume(0);
    enableSfx();
  };

  return (
    <>
      <div className='mt-8 flex items-center justify-center gap-4'>
        <button
          type='button'
          onClick={handelOpen}
          className='focus:rounded-full focus:outline-dashed focus:outline-tertiary'
        >
          <Image src={settingsIcon} alt='settings' />
        </button>
        <button
          type='button'
          onClick={() => (volume === 0 ? handleVolumeOn() : handleVolumeOff())}
          className='focus:rounded-full focus:outline-dashed focus:outline-tertiary'
        >
          {volume ? (
            <Image src={volumeIcon} alt='volume' />
          ) : (
            <Image src={muteIcon} alt='mute' />
          )}
        </button>
      </div>

      <Dialog
        open={isOpen}
        onClose={handleClose}
        className={`relative z-50 ${font}`}
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className='fixed inset-0 bg-primary-dark/70' aria-hidden='true' />

        {/* Full-screen container to center the panel */}
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          {/* The actual dialog panel  */}
          <Dialog.Panel className='relative mx-auto w-[88vw] max-w-lg rounded-3xl bg-white pb-8'>
            <div className='flex items-center justify-between p-6'>
              <Dialog.Title className='text-h2'>Setting</Dialog.Title>
              <button
                type='button'
                onClick={handleClose}
                className='focus:p-1 focus:outline-dashed focus:outline-primary-dark'
              >
                <Image src={closeIcon} alt='close' />
              </button>
            </div>

            <div className='h-0.5 w-full bg-secondary-dark' />

            <div className='p-6'>
              <TimeInputs />
              <FontsList />
              <ColorsList />
            </div>

            <button
              type='button'
              onClick={handleClose}
              className='absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-red p-4 px-12 text-secondary transition-all duration-300 hover:scale-90 focus:rounded-full focus:outline-dashed focus:outline-primary'
            >
              Apply
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
