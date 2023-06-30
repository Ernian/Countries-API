import Link from 'next/link'
import { useAppContext } from '../../hooks/useAppContext'
import { useColorTheme } from '../../hooks/useColorTheme'
import { SunIcon, MoonIcon } from '../../public/svg'
import QuizLink from '../quizLink'

export default function Header() {
  const context = useAppContext()
  const changeColorTheme = () => context.setIsDark(!context.isDark)

  return (
    <header className={`${useColorTheme()} p-3 sm:pl-5 sm:pr-9`}>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <div className='flex items-center gap-2 sm:gap-6 text-base sm:text-2xl'>
          <Link href='/' className='hover:cursor-pointer'>Where in the world?</Link>
          <QuizLink />
        </div>
        <div
          className={`text-sm sm:text-lg flex items-center
          hover:cursor-pointer hover:font-semibold`}
          onClick={changeColorTheme}
        >
          {context.isDark ? <SunIcon /> : <MoonIcon />}
          <span className='inline-block ml-3'>
            {context.isDark ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
      </div>
    </header>
  )
}