import { ButtonWrapper } from './Button.styles'

interface Props {
  label: string,
  onClick: () => void,
}

function Button(props: Props) {
  return (
    <ButtonWrapper onClick={props.onClick}>
      {props.label}
    </ButtonWrapper>
  )
}

export default Button;
