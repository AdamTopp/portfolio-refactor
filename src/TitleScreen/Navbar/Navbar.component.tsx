import { Button, Link, Links, Logo, Wrapper } from './Navbar.styles'

function Navbar() {
  return (
    <Wrapper>
      <Logo>adam</Logo>
      <Links>
        <Link>Experience</Link>
        <Link>About</Link>
        <Link>Resume</Link>
      </Links>
      <Button>Contact</Button>
    </Wrapper>
  )
}

export default Navbar
