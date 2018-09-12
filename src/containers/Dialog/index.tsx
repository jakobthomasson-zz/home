import * as React from 'react';
import styled from 'styled-components';

interface DialogProps extends React.Props<Dialog> {
}

const Wrapper = styled.div`
  display: none;
`;
class Dialog extends React.Component<DialogProps> {
  public render(): React.ReactElement<{}> {
    const { } = this.props;
    return (
      <Wrapper />
    );
  }
}

export default Dialog;

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
