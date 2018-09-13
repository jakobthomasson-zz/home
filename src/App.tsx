import * as React from 'react';
import './App.css';
// import { Redirect, Route, Switch } from 'react-router';
// import TopAnime from 'src/containers/TopAnime';
import styled from 'styled-components';
import { color, fibonacing } from 'src/theme';
import Loader from 'src/containers/Loader';
import Header from 'src/containers/Header';
import Menu from 'src/containers/Menu';
import Content from 'src/containers/Content';
import Footer from 'src/containers/Footer';
import Alerts from 'src/containers/Alerts';
import Dialog from 'src/containers/Dialog';
import routes from 'src/routes';

const Wrapper = styled.div`
  background-color: ${color.background_secondary};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background-color: ${color.background_primary};
  max-width: ${fibonacing._987};
  flex-grow: 1;
`;

class App extends React.Component {
  public render() {
    return (
      <Wrapper>

        <Loader />
        <Dialog />
        <Alerts />

        <Container>
          <Header />
          <Menu routes={routes} />
          <Content routes={routes} />
          <Footer />
        </Container>

      </Wrapper>
    );
  }
}

export default App;
