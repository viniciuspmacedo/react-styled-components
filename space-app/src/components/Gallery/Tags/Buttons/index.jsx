import { useState } from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    background: rgba(217, 217, 217, 0.3);
    font-size: 24px;
    color: white;
    padding: 10px 8px;
    border: ${props => props.$active ? '2px solid #C98CF1' : '2px solid transparent'};
    border-radius: 8px;

    &:hover{
        border-color: #C98CF1;
        cursor: pointer;
    }

`

const Buttons = ({ children} ) => {

    const [isActive, setIsActive] = useState(false)

    function handleClick(){
        setIsActive(!isActive);
    }

    return <StyledButton $active = {isActive} onClick={() => handleClick()}>
        {children}
    </StyledButton>
}
export default Buttons