import * as React from 'react';
import styled from 'styled-components';
import { fibonacing, color, font, fontsize } from 'src/theme';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { IRoute } from 'src/routes';
interface MenuProps extends React.Props<Menu>, RouteComponentProps<any> {
  routes: IRoute[];
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: ${fibonacing._8};
`;

const ListItem = styled.li`
  margin-right: ${fibonacing._13};
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

`;
const LinkText = styled(Link)`
  font-family: ${font.Serif};
  text-transform: uppercase;
  font-size: ${fontsize.small};
  color: ${color.text_secondary};
  text-decoration-line: none;
  margin: 0;
  &:hover {
    color: ${color.text};
  }
`;

const ActiveLinkText = styled(LinkText)`
  color: ${color.text};
`;

class Menu extends React.Component<MenuProps> {
  public render(): React.ReactElement<{}> {
    const { routes, location: { pathname } } = this.props;
    return (
      <Nav>
        <List>
          {routes.map(route =>
            <MenuItem key={route.path} pathname={pathname} route={route} />,
          )}
        </List>
      </Nav>
    );
  }
}

interface MenuItemProps {
  route: IRoute;
  pathname: string;
}

const MenuItem: React.StatelessComponent<MenuItemProps> = ({ route, pathname }) => {
  const isActive = pathname === route.path;

  return (
    <ListItem>
      {/* {console.log(route.path)} */}
      {isActive ?
        <ActiveLinkText to={route.path || '/'}  >
          {route.title}

        </ActiveLinkText>
        :
        <LinkText to={route.path || '/'}  >
          {route.title}
        </LinkText>
      }
    </ListItem>
  );
};

export default withRouter(Menu);
