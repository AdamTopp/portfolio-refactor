import Button from '@components/Button/Button.component';
import { Card, Cards, CardSubTitle, CardTitle, Icon, Section, Subtitle, Title, Vigniette, Wrapper } from './Principles.styles'
import { Brush, Celebration, Forum, PestControl } from '@mui/icons-material';

function Principles() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <Section>
      <Vigniette />
      <Wrapper>
        <Title>Four principles that guide me when</Title>
        <Title>creating awesome websites</Title>
        <Subtitle>See what do I prioritize in my work ethic</Subtitle>
        <Cards>
          <Card number='01'>
            <Icon>
              <Brush />
              <CardTitle>Being unique</CardTitle>
              <CardSubTitle>Stand out in style</CardSubTitle>
            </Icon>
          </Card>
          <Card number='02'>
            <Icon>
              <PestControl />
              <CardTitle>Clean code</CardTitle>
              <CardSubTitle>No more bugs!</CardSubTitle>
            </Icon>
          </Card>
          <Card number='03'>
            <Icon>
              <Forum />
              <CardTitle>Feedback</CardTitle>
              <CardSubTitle>Communication is key</CardSubTitle>
            </Icon>
          </Card>
          <Card number='04'>
            <Icon>
              <Celebration />
              <CardTitle>Having fun!</CardTitle>
              <CardSubTitle>Enjoy creativity</CardSubTitle>
            </Icon>
          </Card>
        </Cards>
        <Button label='About me' onClick={handleClick}/>
      </Wrapper>
    </Section>
  )
}

export default Principles;
