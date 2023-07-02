import { IAction, IState, REGIONS } from '../types'

export const reducer = (state: IState, { type, payload }: IAction) => {
  switch (type) {
    case 'CHANGE_COLOR_THEME':
      return { ...state, isDark: !state.isDark }
    case 'SET_REGION':
      return { ...state, region: payload as REGIONS }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: payload }

    default: throw new Error(`Unknow action type ${type}`)
  }
}

export const initialState: IState = {
  isDark: true,
  region: REGIONS.ALL,
  searchQuery: ''
}