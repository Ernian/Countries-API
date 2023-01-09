import { useAppContext } from '../../hooks/useAppContext'
import { SunIcon, MoonIcon } from '../../public/svg'

export default function Header() {
  const context = useAppContext()
  const changeColorTheme = () => context?.setIsDark(!context?.isDark)

  const bgTextClasses = `${context?.isDark && 'bg-dark-blue text-very-light-gray'} ||
                         ${!context?.isDark && 'bg-slate-100 text-very-dark-blue-lm'}`

  return (
    <header
      className={`${bgTextClasses} flex justify-between items-center px-5 py-3`}
    >
      <div className='text-2xl'>
        Where in the world?
      </div>
      <div
        className='text-lg flex items-center hover:cursor-pointer'
        onClick={changeColorTheme}
      >
        {context?.isDark ? <SunIcon /> : <MoonIcon />}
        <span className='inline-block ml-3'>
          {context?.isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      </div>
    </header>
  )
}