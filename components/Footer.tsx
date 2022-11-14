export default function Footer() {
  return (
    <footer className='font-roboto mb-4 text-center text-[.6rem] text-tertiary md:text-xs'>
      Coded by{' '}
      <a
        href='https://www.ken.engineer/'
        target='_blank'
        rel='noreferrer'
        className='font-bold uppercase underline transition-all duration-300 hover:text-secondary-dark'
      >
        Ken
      </a>
    </footer>
  );
}
