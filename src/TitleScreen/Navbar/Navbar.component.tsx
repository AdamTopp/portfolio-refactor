import Language from '../Language/Language.component'
import { Button, Buttons, Link, Links, Logo, Wrapper } from './Navbar.styles'

function Navbar() {
  return (
    <Wrapper>
      <Logo>adam</Logo>
      <Links>
        <Link>Experience</Link>
        <Link>About</Link>
        <Link>Resume</Link>
      </Links>
      <Buttons>
        <Language />
        <Button>Contact</Button>
      </Buttons>
    </Wrapper>
  )
}

export default Navbar
