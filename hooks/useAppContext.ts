import { useContext } from 'react'
import { AppContext } from '../components/layout'

export const useAppContext = () => useContext(AppContext)