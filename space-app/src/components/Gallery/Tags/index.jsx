import styled from "styled-components";
import tags from './tags.json'
import Buttons from "./Buttons";

const TagsContainer = styled.div`
    display: flex;
    margin: 56px 0;
    gap: 24px;
    align-items: center;
    height: 56px;

    h3{
        margin-right: 64px;
        color: #D9D9D9;
        font-size: 24px;
    }
`

const Tags = () => {
    return (
        <TagsContainer>
            <h3>Busque por tags:</h3>
            {tags.map(tag => <Buttons key={tag.id}>{tag.titulo}</Buttons>)}
        </TagsContainer>
    )
}

export default Tags;