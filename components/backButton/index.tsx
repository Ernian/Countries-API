import { useRouter } from 'next/router'
import { useAppContext } from '../../hooks/useAppContext'

export default function BackButton() {
  const { back } = useRouter()
  const context = useAppContext()
  const bgTextClasses = context?.isDark ?
    'bg-dark-blue text-very-light-gray' :
    'bg-slate-100 text-very-dark-blue-lm'

  const iconColor = context?.isDark ? '#f2f2f2' : '#111517'

  return (
    <button
      onClick={back}
      className={`${bgTextClasses} px-3 py-2 ml-7 lg:ml-0 mt-5
      w-32 h-12 rounded-md lg:my-5 hover:shadow-xl`}
    >
      <svg
        fill={`${iconColor} `}
        stroke={`${iconColor} `}
        width="20px"
        height="20px"
        viewBox="0 0 512 512"
        className='inline-block mr-3'
      >
        <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
	c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"/>
        <path d="M305.312,148.688c-6.25-6.25-16.375-6.25-22.625,0l-96,96c-6.25,6.25-6.25,16.375,0,22.625l96,96
	C285.812,366.438,289.906,368,294,368s8.188-1.562,11.312-4.688c6.25-6.25,6.25-16.375,0-22.625L220.625,256l84.688-84.688
	C311.562,165.062,311.562,154.938,305.312,148.688z"/>
      </svg>
      Back
    </button>
  )
}