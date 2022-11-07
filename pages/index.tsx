import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Context
import { StyleContext } from '../contexts/StyleContext';

// Components
import Themes from '../components/Themes';
import Toggler from '../components/Toggler';

// Assets
import logo from '../public/assets/logo.svg';

export default function Home() {
  const { color, font } = useContext(StyleContext);

  return (
    <div
      className={`grid min-h-screen grid-rows-[1fr_auto] justify-center bg-primary text-${color} ${font}`}
    >
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='my-8 mx-auto flex w-[94%] max-w-5xl flex-col items-center'>
        <Image src={logo} alt='pomodoro' />

        <Toggler />

        <Themes />
      </main>

      <footer className='text-center'>This is footer</footer>
    </div>
  );
}
