import * as React from 'react';
import styled from 'styled-components';
import { fibonacing, color, font, fontsize } from 'src/theme';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import routes from 'src/routes';
interface MenuProps extends React.Props<Menu>, RouteComponentProps<any> {
}

const Wrapper = styled.div`
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
    const { } = this.props;
    return (
      <Wrapper>
        <List>
          {routes.map((route) => {
            const isActive = this.props.location.pathname === route.path;
            console.log(route.path);
            return (
              <ListItem key={route.path}>
                {isActive ?
                  <ActiveLinkText to={route.path || '/'}  >
                    {route.title}
                  </ActiveLinkText>
                  :
                  <LinkText to={route.path || '/'}  >
                    {route.title}
                  </LinkText>
                }
              </ListItem>);
          })}
        </List>
      </Wrapper>
    );
  }
}

// export default Menu;

// function mapStateToProps() {
//   return createStructuredSelector({
//     topAnime: selectTopAnime(),
//     isLoading: selectIsLoading(),
//     isFetched: selectIsFetched(),
//   });
// }

// function mapDispatchToProps(dispatch: any) {
//   return {
//     onTopAnimeFetch: (): void => {
//       dispatch(fetch());
//     },
//   };
// }

export default withRouter(Menu);
