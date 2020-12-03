import Button from '../../../components/buttons/Button'
import {css} from 'styled-components'

export default function buttons() {
  return(
      <div>
        <Button round primaryBlue small>Button</Button>
          <Button round primaryBlue medium>Button</Button>
          <Button round primaryBlue medium shadow>Button</Button>
      </div>
  );
};