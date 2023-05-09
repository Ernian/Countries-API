import { ReactNode } from 'react'
import { useAppContext } from '../../hooks/useAppContext'

export default function MainTag({ children }: { children: ReactNode }) {
  const context = useAppContext()
  const bgTextClasses = context.isDark ?
    'bg-very-dark-blue-dm text-very-light-gray scrollbar-dm' :
    'bg-slate-200 text-very-dark-blue-lm scrollbar-lm'

  return (
    <main className={`${bgTextClasses} grow overflow-y-auto scrollbar`}>
      {children}
    </main>
  )
}
