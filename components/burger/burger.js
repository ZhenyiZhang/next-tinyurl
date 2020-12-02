import styled, {css} from 'styled-components'
import {color} from 'styled-system'

const BurgerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 300px;
`;

const CommonStyle = css`
    ${color};
    border-radius: 5px;
    margin: 2px;
    width: 100%;
`;

const TopBun = styled.div`
    ${CommonStyle};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 50px;
`;

const Cheese = styled.div`
    ${CommonStyle};
    height: 10px;
`;

const Veg = styled.div`
    ${CommonStyle};
    height: 20px;
`;

const Meat = styled.div`
    ${CommonStyle};
    height: 30px;
`;

const BottomBun = styled.div`
    ${CommonStyle};
    height: 50px;
`;

export default function Burger(props) {
    return(
        <BurgerContainer>
            <TopBun bg='chocolate'/>
            {
                [...Array(props.cheese).keys()].map((key) => {
                    return(<Cheese bg='gold' key={key}/>);
                })
            }
            {
                [...Array(props.veg).keys()].map((key) => {
                    return(<Veg bg='forestGreen' key={key}/>);
                })
            }
            {
                [...Array(props.meat).keys()].map((key) => {
                    return(<Meat bg='brown' key={key}/>);
                })
            }
            <BottomBun bg='chocolate'/>
        </BurgerContainer>
    );
}
