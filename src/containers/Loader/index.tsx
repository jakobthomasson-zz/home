import * as React from 'react';
import styled from 'styled-components';
import { color, fibonacing, getOpacity } from 'src/theme';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ILoader } from 'src/store/loading/reducer';
import { selectLoaders } from 'src/store/loading/selectors';
import { Spring } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons';

interface LoaderProps extends React.Props<Loader> {
  loaders: ILoader[];
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
        {loaders.map((loader: ILoader) => {
          console.log('jeasdasdlkjlkasd');
          return (
            <LoaderItem key={loader.id} loader={loader} length={length} />
          );
        })}

      </Wrapper>
    );
  }
}

const LoadBar = styled.div`
  position: absolute;
  width: ${(props: { progress: number, opacity: number }) => `calc(100% * ${props.progress})`};
  height: 100%;
  background-color: ${(props: { progress: number, opacity: number }) => getOpacity(props.opacity, color.secondary_dark)};
`;

interface LoaderItemProps {
  loader: ILoader;
  length: number;
}

const LoaderItem: React.StatelessComponent<LoaderItemProps> = ({ loader: { progress }, length }) => {
  const pSize: number = progress.length - 1;

  const pFrom = progress[pSize - 1] || 0;
  const pTo = progress[pSize] || 0;

  return (
    <Spring
      impl={TimingAnimation}
      config={{
        duration: 1500,
        easing: Easing.linear,
      }}
      from={{ progress: pFrom }}
      to={{ progress: pTo }}
      onRest={() => console.log('klart')} >
      {({ progress }) => <LoadBar progress={progress} opacity={1 / length} />}
    </Spring>
  );
};

function mapStateToProps() {
  return createStructuredSelector({
    loaders: selectLoaders(),
  });
}

export default connect(mapStateToProps)(Loader);
