import bgImage from '../assets/Images/astronaut-with-spacesuit-practicing-snowboarding-moon 1.png'
import Navbar from './Navbar'
function MainPage() {
  return (
    <div
    className="w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="relative z-10 text-white text-center">
      <Navbar />
    </div>
  </div>
  


  )
}

export default MainPage