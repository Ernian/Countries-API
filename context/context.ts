import { createContext, Dispatch } from 'react'
import { IAction, IState } from '../types'

export const AppContext = createContext<[IState, Dispatch<IAction>]>([{} as IState, () => { }])