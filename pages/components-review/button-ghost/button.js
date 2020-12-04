import Button from '../../../components/buttons/Button'
import ButtonsContainer from '../styles/ButtonContainer'

export default function buttons() {
  return(
      <ButtonsContainer>
          <Button primaryPurple transparent small>Button</Button>
          <Button primaryPurple transparent medium>Button</Button>
          <Button primaryPurple transparent large shadow>Button</Button>
          <Button primaryPurple transparent large shadow disabled={true}>Button</Button>
      </ButtonsContainer>
  );
};