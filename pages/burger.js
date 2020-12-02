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

const ResetButton = styled.button`
    border:none;
    border-radius: 15px;
    background: #92de34;
    color: #025600;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    height: 35px;
    margin: 5px;
    width: 150px;
    &:focus {outline: none;}
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
            <ResetButton onClick={() => reset()}>Reset</ResetButton>
        </BuilderContainer>
    )
};