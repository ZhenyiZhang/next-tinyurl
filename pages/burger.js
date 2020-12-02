import Burger from '../components/burger/burger'
import ControllerPanel from '../components/burger/controlPanel'
import styled from 'styled-components'
import {useState} from 'react'

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
        </BuilderContainer>
    )
};