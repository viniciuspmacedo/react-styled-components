import { styled } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Banner from './components/Banner';
import bannerImg from './assets/banner.png';
import Gallery from './components/Gallery';
import photos from './fotos.json';
import { useState } from 'react';

function App() {

  const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`
  const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

  const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`
  const ContentContainer = styled.div`
  display: flex;
  gap: 24px;
`
  const [galleryPhotos, setGalleryPhotos] = useState(photos)

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <ContentContainer>
          <SideBar />
          <StyledMain>
            <Banner backgroundImage={bannerImg} text={'A galeria mais completa de fotos do espaço!'} />
            <Gallery photos={galleryPhotos}/>
          </StyledMain>
        </ContentContainer>
      </AppContainer>
    </GradientBackground>
  )
}

export default App
