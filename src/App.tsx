import * as React from 'react';
import './App.css';
// import { Redirect, Route, Switch } from 'react-router';
// import TopAnime from 'src/containers/TopAnime';
import styled from 'styled-components';
import { color, fibonacing } from 'src/theme';

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

const Loader = styled.div`
  position: absolute;
  width: 100vw;
  height: ${fibonacing._2};
  top: 0;
  left: 0;
  background-color: ${color.secondary_light};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${fibonacing._8};
`;
const Menu = styled.div`
`;
const Page = styled.div``;
const Footer = styled.div``;

class App extends React.Component {
  public render() {
    return (
      <Wrapper>
        <Container>
          <Loader />
          <Header>
            <p>
              vänster
            </p>
            <h2>
              SIDANS NAMN
            </h2>
            <p>
              höger
            </p>

          </Header>
          <Menu />
          <Page />
          <Footer />
          {/* <Switch>
          <Redirect exact from="/" to="/topanime" />
          <Route path="/topanime" component={TopAnime} />
        </Switch> */}
        </Container>
      </Wrapper>
    );
  }
}

export default App;
