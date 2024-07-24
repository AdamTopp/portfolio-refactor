import Logo from '@components/Logo/Logo.component';
import { Column, Columns, Content, Link, LogoWrapper, Section, Title, Version, VersionSection } from './Footer.styles'
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

function Footer() {
  const themeContext = useContext(ThemeContext)

  return (
    <footer>
      <Section>
        <Content>
          <LogoWrapper>
            <Logo logoColor={themeContext?.colors.grey2} />
          </LogoWrapper>
          <Columns>
            <Column>
              <Title>Pages</Title>
              <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noopener noreferrer">Experience</Link>
              <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noopener noreferrer">About me</Link>
            </Column>
            <Column>
              <Title>External</Title>
              <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noopener noreferrer">Linked In</Link>
              <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noopener noreferrer">Instagram</Link>
              <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noopener noreferrer">Resume</Link>
            </Column>
          </Columns>
        </Content>
      </Section>
      <VersionSection>
        <Version>© 2024 Adam Toppmayer. All rights reserved.</Version>
      </VersionSection>
    </footer>
  )
}

export default Footer;
