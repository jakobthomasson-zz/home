import * as React from 'react';
import styled from 'styled-components';
import { color, fibonacing } from 'src/theme';

interface FooterProps extends React.Props<Footer> {
}

const Wrapper = styled.div`
  background-color: ${color.background_primary};
  max-width: ${fibonacing._987};
  flex-grow: 1;
`;

class Footer extends React.Component<FooterProps> {
  public render(): React.ReactElement<{}> {
    const { } = this.props;
    return (
      <Wrapper/>
    );
  }
}

export default Footer;

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
