import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Context
import { StyleContext } from '../contexts/StyleContext';

// Components
import TimerToggler from '../components/TimerToggler';
import Timer from '../components/Timer';
import Settings from '../components/Settings';

// Assets
import logo from '../public/assets/logo.svg';

export default function Home() {
  const { font } = useContext(StyleContext);

  return (
    <div
      className={`grid min-h-screen w-full grid-rows-[1fr_auto] justify-center bg-primary ${font}`}
    >
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='my-8 mx-auto flex w-[88vw] max-w-lg flex-col items-center md:my-12 md:justify-between'>
        <Image src={logo} alt='pomodoro' />

        <TimerToggler />

        <Timer />

        <Settings />
      </main>

      <footer className='text-center'>This is footer</footer>
    </div>
  );
}
