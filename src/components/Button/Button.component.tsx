import { ButtonWrapper } from './Button.styles'

interface Props {
  label: string,
  onClick: () => void,
  minimal?: boolean,
  small?: boolean,
}

function Button(props: Props) {
  return (
    <ButtonWrapper onClick={props.onClick} minimal={props.minimal} small={props.small}>
      {props.label}
    </ButtonWrapper>
  )
}

export default Button;
