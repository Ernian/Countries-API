import { useAppContext } from './useAppContext';

export function useColorTheme() {
  const context = useAppContext()

  return context.isDark ?
    'bg-dark-blue text-very-light-gray' :
    'bg-slate-100 text-very-dark-blue-lm'
}