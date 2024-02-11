# react-styled-components
Repositório para o curso React: estilize componentes com Styled Components e manipule arquivos estáticos

[Figma do projeto](https://www.figma.com/file/2LFVvhAwy08j6kCaPcnOzs/SpaceApp-%7C-React%3A-arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component?type=design&node-id=89-4&mode=design&t=KGRo7AUGag84JjQN-0)

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

## Aula 3

Estruturação do layout da galeria, criação das tags e importação do arquivo fotos.json que contem todas as informações para preencher dinamicamente as fotos da galeria.
O compomente App ficou responsável por gerenciar os estado das fotos da galeria uma vez que mais de um componente (tags e barra de busca) alteraram seu estado.
Utilizamos a técnica *props drilling* para passar as fotos que são gerenciadas pelo ``` <App/>``` dentro do elemento ```<Image/ >``` da galeria.

## Aula 4

Criação do um modal para exibir a imagem selecionada pelo usuário utilizando-se da tag html ```<dialog>``` e usando o metodo 'dialog' dentro de um ```<form>``` para fechá-lo. Também foi criado um elemento de Overlay para impedir o acesso aos demais elementos da tela enquanto o modal estiver aberto.

## Aula 5

Implementação da função de favoritar as imagems.
Aplicação de filtro da galeria pela barra de pesquisa, utilizando do hook useEffect e pelos botões de tags.