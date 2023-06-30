import { ICountryInfo, MODES } from '../../types'

const Answer = ({
  country,
  mode,
  checkAnswer,
  classes,
  getColorOfAnswer,
}:
  {
    country: ICountryInfo,
    mode: MODES,
    classes: string,
    checkAnswer: (ccn3: string) => void,
    getColorOfAnswer: (ccn3: string) => string,
  }) => {

  return (
    <div
      className={`
          max-w-xl text-center mx-auto lg:mx-0
          text-base p-2 my-2
          md:text-xl md:p-3 rounded-lg
          transition-all duration-150
          hover:cursor-pointer
          hover:scale-[1.02]
          ${classes}
          ${getColorOfAnswer(country.ccn3)}
          `}
      onClick={() => checkAnswer(country.ccn3)}
    >
      {
        mode === MODES.COUNTRY_CAPITAL ?
          country.capital || 'Server error, no data' :
          country.name?.official || country.name?.common || 'Server error, no data'
      }
    </div>
  )
}

export default Answer