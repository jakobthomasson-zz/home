import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import { TopAnime } from 'src/store/example/reducer';
const connect = require('react-redux').connect;
import { fetch } from 'src/store/example/actions';
import { selectTopAnime, selectIsLoading, selectIsFetched } from 'src/store/example/selectors';

interface TopAnimePageProps extends React.Props<TopAnimePage> {
  topAnime: TopAnime[];
  isLoading: boolean;
  isFetched: boolean;
  onTopAnimeFetch: () => void;
}

class TopAnimePage extends React.Component<TopAnimePageProps, void> {
  public render(): React.ReactElement<{}> {
    console.log('render of TopAnimePage');
    const { topAnime, isLoading, isFetched, onTopAnimeFetch } = this.props;
    return (
      <div>
        {isLoading && <p>laddar...</p>}

        <ul>
          {topAnime.map((item, idx) => {
            return (
              <li key={idx}>
                {item.title}
              </li>
            );
          })}
        </ul>

        {!isFetched && <button onClick={onTopAnimeFetch}>Fetch</button>}
      </div>

    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    topAnime: selectTopAnime(),
    isLoading: selectIsLoading(),
    isFetched: selectIsFetched(),
  });
}

function mapDispatchToProps(dispatch: any) {
  return {
    onTopAnimeFetch: (): void => {
      dispatch(fetch());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopAnimePage);
