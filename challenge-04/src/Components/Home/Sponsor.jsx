import axonIcon from '../../assets/Images/image 27.svg'
import jetStarIcon from '../../assets/Images/image 28.svg'
import expediaIcon from '../../assets/Images/image 29.png'
import qantasIcon from '../../assets/Images/image 30.svg'
import alitalia from '../../assets/Images/image 31.svg'

function Sponsor() {
  return (
    <div className='flex flex-col items-center justify-around mt-16 md:flex-row mb-6 max-md:mb-10 '>
      <img src={axonIcon} alt="Axon" />
      <img src={jetStarIcon} alt="Jet Star" />
      <img src={expediaIcon} alt="Expedia" />
      <img src={qantasIcon} alt="Qantas" />
      <img src={alitalia} alt="Alitalia" />
    </div>
  )
}

export default Sponsor