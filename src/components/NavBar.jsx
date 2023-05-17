import './styles/NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
  return (
    <nav className="navbar py-4">
      <div className="container">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src="logo.svg" alt="" />
        </a>
        <ul className="nav">
          <li className="nav-item">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>Contact</span>
            </a>
          </li>
        </ul>
        <a href="/" className='cta-button'>
          Join us on
          <img src="discord.png" alt="" />
        </a>
      </div>
    </nav>
  )
}

export default NavBar