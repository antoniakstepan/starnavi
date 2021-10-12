import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: "TT Norms", sans-serif;
    background: #FFFFFF;

    &.modalOpen {
      overflow: hidden;
    }
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button, span {
    font-family: "TT Norms", sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  padding: 20px 130px;
`;
export const ContentWrap = styled.div`
display: flex;
justify-content: space-between;
`;

export const StoreWrap = styled.div`
  width: 200px;
`

export const StoryInfo = styled.p`
  text-align: center;
  font-size: 16px;
`;