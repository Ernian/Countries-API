import { useAppContext } from '../../hooks/useAppContext'
import { SunIcon } from '../../public/svg'

export default function Header() {
  const context = useAppContext()
  const changeColorTheme = () => context?.setIsDark(!context?.isDark)

  return (
    <header
      className={`
      ${context?.isDark && 'bg-dark-blue'} ||
      ${!context?.isDark && 'bg-slate-100'}
      flex justify-between px-5 py-3`
      }>
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div
        className='hover:cursor-pointer'
        onClick={changeColorTheme}
      >
        <SunIcon />
        <span>{context?.isDark ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
    </header>
  )
}