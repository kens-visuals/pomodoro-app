import { useState, useContext } from 'react';
import { Dialog } from '@headlessui/react';
import useSound from 'use-sound';
import Image from 'next/image';

// Context
import { StyleContext } from '../contexts/StyleContext';

// Components
import TimeInputs from './TimeInputs';
import FontsList from './FontsList';
import ColorsList from './ColorsList';

// Assets
import settings from '../public/assets/icon-settings.svg';
import close from '../public/assets/icon-close.svg';

export default function Settings() {
  const { font } = useContext(StyleContext);
  const [isOpen, setIsOpen] = useState(false);
  const [playOnSfx] = useSound('/sounds/switch-on.mp3');
  const [playOffSfx] = useSound('/sounds/switch-off.mp3');

  const handelOpen = () => {
    playOnSfx();
    setIsOpen(true);
  };

  const handleClose = () => {
    playOffSfx();
    setIsOpen(false);
  };

  return (
    <>
      <button
        type='button'
        onClick={handelOpen}
        className='mt-8 focus:rounded-full focus:outline-dashed focus:outline-tertiary'
      >
        <Image src={settings} alt='settings' />
      </button>

      <Dialog
        open={isOpen}
        onClose={handelOpen}
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
                <Image src={close} alt='close' />
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
