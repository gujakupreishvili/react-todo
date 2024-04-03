import { useState ,useEffect } from 'react'
import Input from '../input/Input';
import Footer from '../footer/Footer';
import moonIcon from "../../assets/moon.png";
import sunIcon from "../../assets/sun.png"
import logo from "../../assets/logo.png"


export default function Header() {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [dark]);
  
  return (
    <>
      <div className='header'>
        <div className="header-position">
        <img src={logo} alt="" />
         <img onClick={toggleDarkMode}  src={dark ? moonIcon : sunIcon} alt="" />
        </div>
        <Input />
      </div>
      <Footer />
    </>
  );
}
