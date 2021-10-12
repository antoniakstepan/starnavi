import React, { useState } from 'react';
import Header from './components/Header/Header';
import Squar from './components/Squar/Squar';
import { GlobalStyles, Container, ContentWrap, StoreWrap, StoryInfo } from './styles/globalStyles';
function App() {
  const [story, setStore] = useState([]);
  const [mode, setMode] = useState('');
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Container>
      <GlobalStyles/>
      <Header setIsVisible={setIsVisible} setMode={setMode} />
      <ContentWrap>
        <Squar setStore={setStore} mode={mode} isVisible={isVisible} />
        <StoreWrap>
        {story.map((item, index) => (
          <StoryInfo key={index + 1}>
            {item}
          </StoryInfo>
        ))}
        </StoreWrap>
      </ContentWrap>
    </Container>
  );
}

export default App;
