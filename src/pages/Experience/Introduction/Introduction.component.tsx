import { Section, Title, Wrapper, Text, Highlight, Subtitle } from './Introduction.styles'

function Introduction() {
  return (
    <Section>
      <Wrapper>
        <Title>Who am I?</Title>
        <Text>I'm passionate about creating beautiful products that <Highlight>empower</Highlight> <Highlight>people</Highlight></Text>
        <Subtitle>
          Introduction
        </Subtitle>
      </Wrapper>
    </Section>
  )
}

export default Introduction
