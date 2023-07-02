import { ActionType, REGIONS } from '../types'

const CHANGE_COLOR_THEME: ActionType = 'CHANGE_COLOR_THEME'
const SET_REGION: ActionType = 'SET_REGION'
const SET_SEARCH_QUERY: ActionType = 'SET_SEARCH_QUERY'

export const changeThemeAction = () => ({
  type: CHANGE_COLOR_THEME,
  payload: ''
})

export const setRegionAction = (payload: REGIONS) => ({
  type: SET_REGION,
  payload
})

export const setSearchQueryAction = (payload: string) => ({
  type: SET_SEARCH_QUERY,
  payload
})