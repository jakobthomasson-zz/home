import * as React from 'react';
import styled from 'styled-components';
import { color, fibonacing, getOpacity } from 'src/theme';
import { createStructuredSelector } from 'reselect';
import { selectLoaders } from 'src/store/loader/selectors';
import { Spring } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons';
const connect = require('react-redux').connect;

interface LoaderProps extends React.Props<Loader> {
  loaders: I.Loader[];
}

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: ${fibonacing._3};
  top: 0;
  left: 0;
`;

class Loader extends React.Component<LoaderProps> {

  public render(): React.ReactElement<{}> {
    const { loaders } = this.props;
    console.log(loaders);
    const length = loaders.length !== 0 ? loaders.length : 3;

    return (
      <Wrapper>
        {loaders.map((loader: I.Loader) => {
          return (
            <LoaderItem key={loader.id} loader={loader} length={length} />
          );
        })}

      </Wrapper>
    );
  }
}
function mapStateToProps() {
  return createStructuredSelector({
    loaders: selectLoaders(),
  });
}

function mapDispatchToProps(dispatch: any) {
  return {
    onLoadingFinished: (loader: I.Loader): void => {
      dispatch(fetch());
    },
    onLoadingIteration: (loader: I.Loader): void => {
      dispatch(fetch());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);

const LoadBar = styled.div`
  position: absolute;
  width: ${(props: { progress: number, opacity: number }) => `calc(100% * ${props.progress})`};
  height: 100%;
  background-color: ${(props: { progress: number, opacity: number }) => getOpacity(props.opacity, color.secondary_dark)};
`;

interface LoaderItemProps {
  loader: I.Loader;
  length: number;
}

const LoaderItem: React.StatelessComponent<LoaderItemProps> = ({ loader: { progress, isFinished }, length }) => {
  const pSize: number = progress.length - 1;

  const pFrom = progress[pSize - 1] || 0;
  const pTo = progress[pSize] || 0;

  // const pSize = 3;
  // const pTo = progress[0];
  // const pFrom = Math.random();
  return (
    <Spring
      impl={TimingAnimation}
      config={{
        duration: 400,
        easing: Easing.linear,
      }}
      from={{ progress: pFrom }}
      to={{ progress: pTo }}
      onRest={() => console.log('klart')}
      reset={!isFinished} >
      {({ progress }) => <LoadBar progress={progress} opacity={1 / length} />}
    </Spring>
  );
};
