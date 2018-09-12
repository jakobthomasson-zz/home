import * as React from 'react';
import styled from 'styled-components';
import { fibonacing } from 'src/theme';
import { Title } from 'src/components/Heading';
interface HeaderProps extends React.Props<Header> {
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${fibonacing._8};
`;

class Header extends React.Component<HeaderProps> {
  public render(): React.ReactElement<{}> {
    const { } = this.props;
    return (
      <Wrapper>
        <Title>Header</Title>
      </Wrapper>

    );
  }
}

export default Header;

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

// export default connect(mapStateToProps, mapDispatchToProps)(Loader);
