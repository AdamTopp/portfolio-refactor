import Button from '@components/Button/Button.component';
import { Card, Cards, CardSubTitle, CardTitle, Icon, Section, Subtitle, Title, Vigniette, Wrapper } from './Principles.styles'
import { Brush, Celebration, Forum, PestControl } from '@mui/icons-material';

const data = [{
  icon: <Brush />,
  title: 'Being unique',
  subTitle: 'Stand out in style'
}, {
  icon: <PestControl />,
  title: 'Clean code',
  subTitle: 'No more bugs!'
}, {
  icon: <Forum />,
  title: 'Feedback',
  subTitle: 'Communication is key'
}, {
  icon: <Celebration />,
  title: 'Having fun!',
  subTitle: 'Enjoy creativity'
}]
function Principles() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <Section>
      <Vigniette />
      <Wrapper>
        <Title>Four principles that guide me when <br/> creating awesome websites </Title>
        <Subtitle>See what do I prioritize in my work ethic</Subtitle>
        <Cards>
          {data.map((card, ind) => (
            <Card $number={`0${ind}`} key={card.title}>
              <Icon>
                {card.icon}
                <CardTitle>{card.title}</CardTitle>
                <CardSubTitle>{card.subTitle}</CardSubTitle>
              </Icon>
            </Card>
          ))}
        </Cards>
        <Button label='About me' onClick={handleClick}/>
      </Wrapper>
    </Section>
  )
}

export default Principles;
