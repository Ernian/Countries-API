import { useColorTheme } from '../../hooks/useColorTheme'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className={`${useColorTheme()} flex flex-col justify-center
       items-center py-2`}
    >
      <p className='text-base sm:text-xl'>
        {`Generated by create next app. ${year}`}
      </p>
      <p className='text-sm sm:text-base'>
        <a href='https://restcountries.com/' target='_blank' rel='noreferrer' className='hover:font-semibold'>API </a>
        <a href='https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca' target='_blank' rel='noreferrer' className='hover:font-semibold'>Source</a>
      </p>
    </footer>
  )
}