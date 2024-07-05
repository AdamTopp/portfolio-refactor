import { Wrapper } from './Language.styles'
import { Language as Icon } from '@mui/icons-material';

function Language() {
  const key = 'en';

  return (
    <Wrapper>
      {key.toUpperCase()}
      <Icon />
    </Wrapper>
  )
}

export default Language
