import styled from "styled-components";
import Tags from "./Tags"
import Title from "../Title";
import Image from "./Image";

const NavigationSection = styled.section`
    flex-grow: 1;
`

const PopularsSection = styled.section`
    
`

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    `

const Gallery = ({ photos }) => {
    return (
        <>
            <Tags />
            <GalleryContainer>
                <NavigationSection>
                    <Title>Navegue pela galeria</Title>
                    {photos.map(photo => <Image key={photo.id} photo={photo}></Image>)}
                </NavigationSection>
                <PopularsSection>
                    <Title $textAlign='center'>Populares</Title>
                </PopularsSection>
            </GalleryContainer>
        </>
    )
}

export default Gallery;