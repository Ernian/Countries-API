import { useAppContext } from '../hooks/useAppContext'

export default function Custom404() {
  const context = useAppContext()

  const bgTextClasses = context?.isDark ?
    'bg-very-dark-blue-dm text-very-light-gray' :
    'bg-slate-200 text-very-dark-blue-lm'

  return (
    <main className={`${bgTextClasses} grow text-3xl p-5`}>Page not found</main>
  )
}