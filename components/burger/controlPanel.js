import styled from 'styled-components'

const PanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`;

const ControlUnit = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 200px;
`;

const Button = styled.button`
    height: 20px;
    width: 20px;
`;

export default function ControllerPanel(props) {
    /*layer and setLayer are parent state passed through props*/
    const addUnit = (layer, setLayer) => {
        setLayer(layer + 1);
    };
    const subUnit = (layer, setLayer) => {
        layer <= 0 ? setLayer(0) : setLayer(layer - 1);
    };
    return (
        <PanelContainer>
            <ControlUnit>
                <Button onClick={() => subUnit(props.cheese, props.setCheese)}>-</Button>
                <div>Cheese x{props.cheese}</div>
                <Button onClick={() => addUnit(props.cheese, props.setCheese)}>+</Button>
            </ControlUnit>
            <ControlUnit>
                <Button onClick={() => subUnit(props.veg, props.setVeg)}>-</Button>
                <div>Veg x{props.veg}</div>
                <Button onClick={() => addUnit(props.veg, props.setVeg)}>+</Button>
            </ControlUnit>
            <ControlUnit>
                <Button onClick={() => subUnit(props.meat, props.setMeat)}>-</Button>
                <div>Meat x{props.meat}</div>
                <Button onClick={() => addUnit(props.meat, props.setMeat)}>+</Button>
            </ControlUnit>
        </PanelContainer>
    )
}
