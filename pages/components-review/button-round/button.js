import Button from '../../../components/buttons/button';
import ButtonsContainer from '../styles/ButtonContainer';

export default function buttons() {
  return(
      <ButtonsContainer>
        <Button round primaryBlue small>Button</Button>
          <Button round primaryBlue medium>Button</Button>
          <Button round primaryBlue large shadow>Button</Button>
          <Button round primaryBlue large shadow disabled={true}>Button</Button>
      </ButtonsContainer>
  );
};