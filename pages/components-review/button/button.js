import Button from '../../../components/buttons/Button'
import ButtonsContainer from '../styles/ButtonContainer'

export default function buttons() {
  return(
      <ButtonsContainer>
          <Button lightRed small>Button</Button>
          <Button lightRed medium>Button</Button>
          <Button lightRed large shadow>Button</Button>
          <Button lightRed large shadow disabled={true}>Button</Button>
      </ButtonsContainer>
  );
};