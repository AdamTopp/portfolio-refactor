import { Section, Title, Wrapper, Text, Highlight, Subtitle } from './Introduction.styles'

function Introduction() {
  return (
    <Section>
      <Wrapper>
        <Title>Who am I?</Title>
        <Text>I'm passionate about creating beautiful <br/>products that <Highlight>empower</Highlight> <Highlight>people</Highlight><Subtitle>
          Introduction
        </Subtitle></Text>
        
      </Wrapper>
    </Section>
  )
}

export default Introduction
