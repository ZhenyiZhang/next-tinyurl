import styled, {css} from 'styled-components'
import {color} from 'styled-system'

const BurgerContainer = styled.div`
    display: flex;;
    flex-direction: column;
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
    height: 50px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
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
                Array(props.cheese).fill(0).map(() => {
                    return(<Cheese bg='gold'/>);
                })
            }
            {
                Array(props.veg).fill(0).map(() => {
                    return(<Veg bg='forestGreen'/>);
                })
            }
            {
                Array(props.meat).fill(0).map(() => {
                    return(<Meat bg='brown'/>);
                })
            }
            <BottomBun bg='chocolate'/>
        </BurgerContainer>
    );
}
