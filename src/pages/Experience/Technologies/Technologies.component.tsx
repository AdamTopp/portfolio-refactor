import Button from '@components/Button/Button.component';
import { Card, Cards, CardSubTitle, CardTitle, Icon, Section, Title, Vigniette, Wrapper, Highlight } from './Technologies.styles'
import { Brush } from '@mui/icons-material';

const data = [{
  icon: '',
  title: 'React',
  desc: 'Frontend framework'
}, {
  icon: '',
  title: 'Styled Components',
  desc: 'Styling library'
}, {
  icon: '',
  title: 'Vite',
  desc: 'Module bundler'
}, {
  icon: '',
  title: 'Photoshop',
  desc: 'Asset creation'
}, {
  icon: '',
  title: 'Typescript',
  desc: 'For type safety'
}, {
  icon: '',
  title: 'Figma',
  desc: 'Mockups'
}];

function Technologies() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <Section>
      <Vigniette />
      <Wrapper>
        <Title>Get to know what technologies <br/> do I use <Highlight>everyday</Highlight></Title>
        <Cards>
          {data.map((i) => (
            <Card>
              <Icon>
                <Brush />
                <CardTitle>{i.title}</CardTitle>
                <CardSubTitle>{i.desc}</CardSubTitle>
              </Icon>
            </Card>
          ))}
        </Cards>
        <Button label='More in my resume' onClick={handleClick}/>
      </Wrapper>
    </Section>
  )
}

export default Technologies;
