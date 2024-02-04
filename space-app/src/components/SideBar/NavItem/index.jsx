import styled from "styled-components";

const StyledListItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 24px;
    width: 212px;
    margin-bottom: 12px;
    a{
        color: ${props => props.$active ? '#7B78E5' : '#D9D9D9'};
        font-family: ${props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
        text-decoration: none;
    }
`

const NavItem = ({children, activeIcon, inactiveIcon, active = false}) =>{
    return(
        <StyledListItem $active={active}>
            <img src={active ? activeIcon: inactiveIcon} alt="" />
            <a href="#">{children}</a>
        </StyledListItem>
    )
}

export default NavItem;