import lupa from './search.png'
import styled from 'styled-components'

const StyledSearchInput = styled.div`
    border-radius: 10px;
    box-sizing: border-box;
    background: linear-gradient(to right, #C98CF1, #7B78E5);
    display: flex;
    padding: 2px;
    position: relative;
    height: 52px;
    width: 612px;

    input {
        position: relative;
        border: 1px solid transparent;
        border-radius: 10px;
        background-color: #041d3e;
        width: 100%;
        padding: 12px 16px;
        color: #d9d9d9;

        &::placeholder{
            color: #d9d9d9;
        }
    }
    img{
        position: absolute;
        top: 12px;
        right: 16px;
    }
`

const SearchInput = () => {
    return (
        <StyledSearchInput>
            <input type="search" placeholder="O que você procura?" />
            <img src={lupa} alt="" />
        </StyledSearchInput>
    )
}
export default SearchInput