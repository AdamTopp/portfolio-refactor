import Button from '@/components/Button/Button.component';
import { Content, Section, Title, Highlight } from './ContactBanner.styles'

function ContactBanner() {
  const handleClick = () => {
    console.log('Adam');
  };

  return (
    <Section>
      <Content>
        <Title>Want to work <br/> toegether?<Highlight>Let’s talk!</Highlight></Title>
        <Button small label='Give me a call' minimal onClick={handleClick} />
      </Content>
    </Section>
  )
}

export default ContactBanner;
