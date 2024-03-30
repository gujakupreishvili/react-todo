import { useState } from 'react'
import Input from '../input/Input';
import Footer from '../footer/Footer';

export default function Header() {
  const [dark, setDark] = useState(false);
  const [moonStyle, setMoonStyle] = useState({ display: 'block' });
  const [sunStyle, setSunStyle] = useState({ display: 'none' });

  const toggleDarkMode = () => {
    setDark(!dark);
    if (dark) {
      document.body.classList.remove('dark-body');
      setMoonStyle({ display: 'block' });
      setSunStyle({ display: 'none' });
    } else {
      document.body.classList.add('dark-body');
      setMoonStyle({ display: 'none' });
      setSunStyle({ display: 'block' });
    }
  };
  
  return (
    <>
      <div className='header'>
        <div className="header-position">
          <img src="/src/assets/logo.png" alt="" />
          <img
          src="/src/assets/moon.png"
          alt="Moon Logo"
          onClick={toggleDarkMode}
          style={moonStyle}
         />

        <img
        src="/src/assets/sun.png"
        alt="Sun Logo"
        onClick={toggleDarkMode}
        style={sunStyle}
        />
        </div>
        <Input />
      </div>
      <Footer />
    </>
  );
}
