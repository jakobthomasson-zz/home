import * as React from 'react';
const connect = require('react-redux').connect;
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { fetch } from 'src/store/example/actions';
// import { selectTopAnime, selectIsLoading, selectIsFetched } from 'src/store/example/selectors';

interface HomePageProps extends React.Props<HomePage> {
}

class HomePage extends React.Component<HomePageProps, void> {
  public render(): React.ReactElement<{}> {
    const { } = this.props;
    console.log('render of HomePage');

    return (
      <div>
        hej
      </div>

    );
  }
}

function mapStateToProps() {
  // return createStructuredSelector({
  //   topAnime: selectTopAnime(),
  //   isLoading: selectIsLoading(),
  //   isFetched: selectIsFetched(),
  // });
}

function mapDispatchToProps(dispatch: any) {
  // return {
  //   onTopAnimeFetch: (): void => {
  //     dispatch(fetch());
  //   },
  // };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

// export default HomePage;
