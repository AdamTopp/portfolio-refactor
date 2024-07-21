import { ButtonWrapper } from './Button.styles'

interface Props {
  label: string,
  onClick: () => void,
  simple?: boolean,
  small?: boolean,
}

function Button(props: Props) {
  return (
    <ButtonWrapper onClick={props.onClick} $simple={props.simple} $small={props.small}>
      {props.label}
    </ButtonWrapper>
  )
}

export default Button;
