import { useAppContext } from '../hooks/useAppContext'

export default function Home() {
  const context = useAppContext()
  const bgTextClasses = `${context?.isDark && 'bg-very-dark-blue-dm text-very-light-gray'} ||
                         ${!context?.isDark && 'bg-slate-200 text-very-dark-blue-lm'}`

  return (
    <main className={`${bgTextClasses} grow`}>
      <h1 className='text-5xl text-center'>happy codding</h1>
    </main>
  )
}
