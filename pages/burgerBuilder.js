import {useState} from 'react';

import styled from 'styled-components';

import Burger from '../components/burger/burger';
import ControllerPanel from '../components/burger/controlPanel';
import Button from '../components/buttons/button';

const BuilderContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
`;

export default function burgerBuilder() {
    const [cheese, setCheese] = useState(1);
    const [meat, setMeat] = useState(1);
    const [veg, setVeg] = useState(1);

    const reset = () => {
        setCheese(1);
        setMeat(1);
        setVeg(1);
    };

    return (
        <BuilderContainer>
            <Burger
                cheese={cheese}
                meat={meat}
                veg={veg}
            />
            <ControllerPanel
                cheese={cheese}
                meat={meat}
                veg={veg}
                setCheese={setCheese}
                setMeat={setMeat}
                setVeg={setVeg}
            />
            <Button round primaryBlue medium onClick={() => reset()}>Reset</Button>
        </BuilderContainer>
    )
};