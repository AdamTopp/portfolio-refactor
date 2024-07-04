import Navbar from './Navbar/Navbar.component'
import { Banner, Content, OutlineText, Scroll, Section, MainText } from './TitleScreen.styles'

function TitleScreen() {
  return (
    <Section>
      <Content>
        <Navbar>Adam</Navbar>
        <Banner>
          <OutlineText>Hi I'm Adam</OutlineText>
          <MainText>Hi I'm Adam</MainText>
          <OutlineText>Hi I'm Adam</OutlineText>
          <Scroll />
        </Banner>
      </Content>
    </Section>
  )
}

export default TitleScreen
