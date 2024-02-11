import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"
import { useState } from "react";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = ({aoTextoPesquisado, textoPesquisado}) => {

    
    return (<HeaderEstilizado>
        <img src="/imagens/logo.png" alt="" />
        <CampoTexto value={textoPesquisado} onChange={(e)=>aoTextoPesquisado(e)}/>
    </HeaderEstilizado>)
}

export default Cabecalho