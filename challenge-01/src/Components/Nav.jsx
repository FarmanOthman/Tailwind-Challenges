import { Link } from 'react-router-dom'
import facebook from '../assets/facebook icon.svg'
import github from '../assets/github icon.svg'
import tailwindLogo from '../assets/Tailwind Logo.svg'

const Nav = () => {
  return (
    <nav className=" flex justify-between bg-gray-500 p-6">
        <img src={tailwindLogo} alt="Tailwind Logo" className='w-6 h-6 sm:w-8 sm:h-8' />
        <ul className="flex justify-around flex-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="flex justify-end">
          <img src={facebook} alt="Facebook Icone" className="w-6 h-6 sm:w-8 sm:h-8 mx-1" />
          <img src={github} alt="Github Icone" className="w-6 h-6 sm:w-8 sm:h-8 mx-1" />
        </div>
      </nav>
  )
}

export default Nav