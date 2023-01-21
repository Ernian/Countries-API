import Link from 'next/link'
import { useAppContext } from '../../hooks/useAppContext'
import { SunIcon, MoonIcon } from '../../public/svg'

export default function Header() {
  const context = useAppContext()
  const changeColorTheme = () => context?.setIsDark(!context?.isDark)
  const bgTextClasses = context?.isDark ?
    'bg-dark-blue text-very-light-gray' :
    'bg-slate-100 text-very-dark-blue-lm'

  return (
    <header className={`${bgTextClasses} p-3 sm:pl-5 sm:pr-9`}>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <div className='text-base sm:text-2xl'>
          <Link href='/' className='hover:cursor-pointer'>Where in the world?</Link>
        </div>
        <div
          className={`text-sm sm:text-lg flex items-center
          hover:cursor-pointer hover:font-semibold`}
          onClick={changeColorTheme}
        >
          {context?.isDark ? <SunIcon /> : <MoonIcon />}
          <span className='inline-block ml-3'>
            {context?.isDark ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
      </div>
    </header>
  )
}