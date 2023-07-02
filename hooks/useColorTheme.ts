import { useAppContext } from './useAppContext';

export function useColorTheme() {
  const [state] = useAppContext()

  return state.isDark ?
    'bg-dark-blue text-very-light-gray' :
    'bg-slate-100 text-very-dark-blue-lm'
}