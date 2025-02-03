
import {Link} from 'react-router-dom';
import style from './Header.module.scss';
import dglogo from '../../assests/images/DG-New-Logo.jpeg';


const Header = () => {

  return (
    <>
      <div className={style.logoSection}>
        <img src={dglogo} className={style.logoImage}/>
      </div>
      <div className={style.headerSection}>
        <ul className={style.navbar}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/About">ABOUT</Link></li>
          <li><Link to="/Course">COURSES</Link></li>
          <li><Link to="/Product">PRODUCT</Link></li>
          <li><Link to="/Services">SERVICES</Link></li>
          <li><Link to="/Portfolio">PORTFOLIO</Link></li>
          <li><Link to="/Review">REVIEW</Link></li>
          <li><Link to="/Blog">BLOG</Link></li>
          <li><Link to="/Contact">CONTACT</Link></li>
          <li><Link to="/Login">LOG IN</Link></li>
          <li><Link to="/Register">REGISTER</Link></li>
          <li><Link to="/Help">HELP</Link></li>
          </ul>
      </div>

    </>
  )
}
export default Header;




