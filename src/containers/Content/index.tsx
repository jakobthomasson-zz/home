import * as React from 'react';
import styled from 'styled-components';
import { color, fibonacing } from 'src/theme';

interface ContentProps extends React.Props<Content> {
}

const Wrapper = styled.div`
  background-color: ${color.background_primary};
  max-width: ${fibonacing._987};
  flex-grow: 1;
`;

class Content extends React.Component<ContentProps> {
  public render(): React.ReactElement<{}> {
    const { } = this.props;
    return (
      <Wrapper>
        Content
      </Wrapper>

    );
  }
}

export default Content;

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
