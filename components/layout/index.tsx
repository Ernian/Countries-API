import { useState, createContext } from 'react'
import Header from '../header'
import Footer from '../footer'
import { AppContextType } from '../../types'

export const AppContext = createContext<AppContextType>(null)

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(true)
  const context = { isDark, setIsDark }

  return (
    <AppContext.Provider value={context}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </AppContext.Provider>
  )
}