import * as React from 'react';
import styled from 'styled-components';
import { color, fibonacing } from 'src/theme';
import { Switch, Route } from 'react-router';
import { IRoute } from 'src/routes';

interface ContentProps extends React.Props<Content> {
  routes: IRoute[];
}

const Wrapper = styled.div`
  background-color: ${color.background_primary};
  max-width: ${fibonacing._987};
  flex-grow: 1;
`;

class Content extends React.Component<ContentProps> {
  public render(): React.ReactElement<{}> {
    const { routes } = this.props;
    return (
      <Wrapper>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
          ),
          )}
        </Switch>
      </Wrapper>

    );
  }
}

export default Content;
