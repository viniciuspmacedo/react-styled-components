import { styled } from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Banner from './components/Banner'
import bannerImg from './assets/banner.png';

function App() {

  const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`
const StyledMain = styled.main`
  display: flex;
  gap: 24px;
`

  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
      <StyledMain>
        <SideBar />
        <Banner backgroundImage={bannerImg}/>
      </StyledMain>
    </GradientBackground>
  )
}

export default App
