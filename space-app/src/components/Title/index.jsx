import styled from "styled-components"

const Title = styled.h2`
    font-weight: 400;
    font-size: 32px;
    color: #7B78E5;
    text-align: ${props => props.$textAlign ? props.$textAlign : 'left'};

`

export default Title