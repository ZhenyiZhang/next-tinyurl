import Button from '../../../components/buttons/Button'
import ButtonsContainer from '../styles/ButtonContainer'

export default function buttons() {
  return(
      <ButtonsContainer>
        <Button round primaryBlue small>Button</Button>
          <Button round primaryBlue medium>Button</Button>
          <Button round primaryBlue medium shadow>Button</Button>
      </ButtonsContainer>
  );
};