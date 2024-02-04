import styled from "styled-components"
import SearchInput from "../SearchInput"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0;

    img{
        max-width: 212px;
        max-height: 65px;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <img src="/images/logo.png" alt="" />
            <SearchInput/>
        </StyledHeader>
    )
}

export default Header