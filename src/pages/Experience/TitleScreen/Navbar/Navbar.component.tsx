import Logo from '@/components/Logo/Logo.component'
import Language from '../Language/Language.component'
import { Buttons, Link, Links, LogoWrapper, Wrapper } from './Navbar.styles'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Button from '@/components/Button/Button.component'

function Navbar() {
  const themeContext = useContext(ThemeContext);

  const handleClick = () => {
    console.log('Click');
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo logoColor={themeContext?.colors.white} />
      </LogoWrapper>
      <Links>
        <Link>Experience</Link>
        <Link>About</Link>
        <Link>Resume</Link>
      </Links>
      <Buttons>
        <Language />
        <Button label='Contact' onClick={handleClick} simple small/>
      </Buttons>
    </Wrapper>
  )
}

export default Navbar
