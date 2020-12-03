import Button from '../../../components/buttons/Button'
import ButtonsContainer from '../styles/ButtonContainer'

export default function buttons() {
  return(
      <ButtonsContainer>
          <Button round lightRed small>Button</Button>
          <Button round lightRed medium>Button</Button>
          <Button round lightRed large shadow>Button</Button>
      </ButtonsContainer>
  );
};