import React from 'react';
import styled from 'styled-components';
import ColorPicker from './components/ColorPicker/ColorPicker';

import Card from './components/Card/Card';
import Footer from './components/footer/Footer';

const AppWrapper = styled.div`
  text-align: center;
  margin: 2rem;
  padding-bottom: 1rem;
`;
const App = () => {
  return (
    <AppWrapper>
      <ColorPicker />

      <Card />
      <Footer />
    </AppWrapper>
  );
};

export default App;
