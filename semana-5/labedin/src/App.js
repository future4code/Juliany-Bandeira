import React from 'react';
import eu from './components/imagens/me.webp';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './components/imagens/email.png';
import endereco from './components/imagens/endereco.png';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import diuro from './components/imagens/diuro.png';
import univesp from './components/imagens/univesp.jpg';
import unip from './components/imagens/unip.png';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  }`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const SectionContainer = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

function App() {
  return (
    <div>
     <GlobalStyle/>
      <PageSectionContainer>
        <SectionContainer>Dados pessoais</SectionContainer>
        <CardGrande 
          imagem={eu}
          nome="Juliany Bandeira" 
          descricao="Olá, eu sou a Juliany. Sou apaixonada pelo mundo tech e encontrei na programação um ambiente perfeito de muito aprendizado e grandes realizações. Tenho experiência de cerca de 10 anos na área administrativa, estou no curso de Desenvolvimento Full Stack na Labenu e atualmente no módulo front end."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
          imagem={email}
          tipoInformacao="Email"
          informacao="juliany12121989@gmail.com"
        />
        <CardPequeno 
        imagem={endereco}
        tipoInformacao="Endereço"
        informacao="Cubatão - SP"      
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <SectionContainer>Experiências profissionais</SectionContainer>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante Full Stack" 
        />
        <CardGrande 
          imagem={diuro}
          nome="DiUro"
          descricao="Assistente Administrativa - Responsável pelo faturamento, setor de glosas e prestação de contas." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <SectionContainer>Formação acadêmica</SectionContainer>
        <CardGrande 
          imagem={univesp}
          nome="Univesp" 
          descricao="Tecnologia da Informação (CURSANDO)" 
          conclusao= "Conclusão prevista: 2024"
        />
        <CardGrande 
          imagem={unip}
          nome="Unip"
          descricao="Administração de empresas" 
          conclusao="Conclusão: 2013"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <SectionContainer>Minhas redes sociais</SectionContainer>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </div>
  );
}

export default App;
