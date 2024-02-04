# react-styled-components
Repositório para o curso React: estilize componentes com Styled Components e manipule arquivos estáticos

## Aula 1

Inciamos um projeto com a ultima versão do Vite.

```npm create vite@latest```

Instalamos a última versão styled-componets no projeto.

 ```npm install styled-components```

Criamos nosso primeiro styled-component e criamos um estilo global com Normalize.css

## Aula 2

Desenvoldida a barra de navegação lateral e o banner.
Apresentado como fazer estilização no styled-components utilizando as *props*.

```
const StyledFigure = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    ....

const Banner = ({backgroundImage}) => {
    return (
        <StyledFigure $backgroundImage = {backgroundImage}>
```
No caso acima o banner receberá uma imagem via *props* o que o torna mais reutilizável.

Além disso apredi boas práticas para importação de arquivos de fontes.

```
import GandhiSansRegular from './fonts/GandhiSans-Regular.otf';
import GandhiSansBold from './fonts/GandhiSans-Bold.otf';


const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'GandhiSansRegular';
  src: local('Gandhi Sans Regular'), local('GandhiSansRegular'),  url(${GandhiSansRegular});
}

@font-face {
  font-family: 'GandhiSansBold';
  src: local('Gandhi Sans Bold'), local('GandhiSansBold'),  url(${GandhiSansBold});
}
```
Os arquivos das fontes foram importados no componente estilizado *'GlobalStyles'* e posteriormente criados os *@font-face* no CSS.
A função **local()** diz ao navegador para tentar usar a fonte local, caso o usuário a tenha instalada, caso contrário usará a url.