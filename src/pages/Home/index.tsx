import * as React from 'react';
const connect = require('react-redux').connect;
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { startLoader, updateLoader, stopLoader } from 'src/store/loader/actions';
import { Dispatch } from 'redux';
// import { selectTopAnime, selectIsLoading, selectIsFetched } from 'src/store/example/selectors';

interface HomePageProps extends React.Props<HomePage> {
  onStartLoader: (isComputable: boolean) => void;
  onUpdateLoader: (loader: I.Loader) => void;
  onStopLoader: (loader: I.Loader) => void;
}

class HomePage extends React.Component<HomePageProps, void> {

  public render(): React.ReactElement<{}> {
    const { onStartLoader, onUpdateLoader, onStopLoader } = this.props;
    console.log('render of HomePage');

    return (
      <div>
        <button onClick={() => onStartLoader(false)}>Start noncomputable loader</button>
        <button onClick={() => onStopLoader}>Stop noncomputable load</button>

        <button onClick={() => onStartLoader(true)}>Start computable loader</button>
        <button onClick={() => onUpdateLoader}>Start computable load</button>

      </div>

    );
  }
}

// function mapStateToProps() {
//   // return createStructuredSelector({
//   //   topAnime: selectTopAnime(),
//   //   isLoading: selectIsLoading(),
//   //   isFetched: selectIsFetched(),
//   // });
// }

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onStartLoader: (isComputable: boolean): void => {
      dispatch(startLoader(isComputable));
    },
    onUpdateLoader: (loader: I.Loader): void => {
      dispatch(updateLoader(loader));
    },
    onStopLoader: (loader: I.Loader): void => {
      dispatch(stopLoader(loader));
    },
  };
}

export default connect(undefined, mapDispatchToProps)(HomePage);

// export default HomePage;
