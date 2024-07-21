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
            <Logo logoColor={themeContext?.colors.grey} />
          </LogoWrapper>
          <Columns>
            <Column>
              <Title>Pages</Title>
              <Link>Experience</Link>
              <Link>About me</Link>
            </Column>
            <Column>
              <Title>External</Title>
              <Link>Linked In</Link>
              <Link>Instagram</Link>
              <Link>Resume</Link>
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
