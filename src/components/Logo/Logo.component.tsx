import { Logo as LogoItem } from './Logo.styles';

interface Props {
  logoColor?: string;
}

function Logo({ logoColor }: Props) {
  return (
    <LogoItem $logocolor={logoColor}>adam</LogoItem>
  )
}

export default Logo;
