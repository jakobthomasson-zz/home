import * as React from 'react';
import styled from 'styled-components';
import { color, fibonacing } from 'src/theme';

interface AlertsProps extends React.Props<Alerts> {
}

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: ${fibonacing._2};
  top: 0;
  left: 0;
  background-color: ${color.secondary_light};
`;

class Alerts extends React.Component<AlertsProps> {
  public render(): React.ReactElement<{}> {
    const { } = this.props;
    return (
      <Wrapper />
    );
  }
}

export default Alerts;

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
