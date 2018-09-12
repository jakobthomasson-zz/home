import * as React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import TopAnime from 'src/containers/TopAnime';
class App extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Redirect exact from="/" to="/topanime" />
          <Route path="/topanime" component={TopAnime} />
        </Switch>
      </div>
    );
  }
}

export default App;
