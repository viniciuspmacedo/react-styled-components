import styled from 'styled-components';

const StyledFigure = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    max-width: 100%;
    background-size: cover;
    border-radius: 10px;
`
const StyledTitle = styled.h1`
    font-size: 40;
    font-weight: 400;
    color: white;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = ({backgroundImage, text}) => {
    return (
        <StyledFigure $backgroundImage = {backgroundImage}>
            <StyledTitle>
            {text}
            </StyledTitle>
        </StyledFigure>
    )
}

export default Banner;