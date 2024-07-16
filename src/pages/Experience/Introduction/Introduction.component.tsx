import { Section, Title, Wrapper, Text, Highlight } from './Introduction.styles'

function Introduction() {
  return (
    <Section>
      <Wrapper>
        <Title>Who am I?</Title>
        <Text>I'm passionate about creating beautiful products that <Highlight textValue='empower'>empower</Highlight> <Highlight textValue='people'>people</Highlight></Text>
      </Wrapper>
    </Section>
  )
}

export default Introduction
