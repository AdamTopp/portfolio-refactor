import { Content, LastLink, Link, Name, Row, Section, Year } from './WorkTable.styles'

const data = [{
  year: 2021,
  name: 'Adam Mickiewicz University',
  url: 'https://www.youtube.com/watch?v=1LBnoCkqmQs&list=PL28oZ4FVZmk7ylJsb0xF26179_iu64OaF&index=2'
}, {
  year: 2022,
  name: 'SNP Poland sp. zoo - Internship',
  url: 'https://www.youtube.com/watch?v=1LBnoCkqmQs&list=PL28oZ4FVZmk7ylJsb0xF26179_iu64OaF&index=2'
}, {
  year: 2022,
  name: 'All for One sp. zoo',
  url: 'https://www.youtube.com/watch?v=1LBnoCkqmQs&list=PL28oZ4FVZmk7ylJsb0xF26179_iu64OaF&index=2'
}];

function WorkTable() {
  return (
    <Section>
      <Content>
        {data.map((i) => (
          <Row key={i.name}>
            <Year>{i.year}</Year>
            <Name>{i.name}</Name>
            <Link href={i.url} target='_blank' rel="noopener noreferrer">learn more</Link>
          </Row>
        ))}
        <Row>
          <LastLink>Your place here</LastLink>
        </Row>
      </Content>
    </Section>
  )
}

export default WorkTable
