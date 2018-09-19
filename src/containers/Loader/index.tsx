import * as React from 'react';
import styled from 'styled-components';
import { color, fibonacing, getOpacity } from 'src/theme';
import { createStructuredSelector } from 'reselect';
import { selectLoaders } from 'src/store/loader/selectors';
import { Keyframes } from 'react-spring';
// import { Spring } from 'react-spring';
// import delay from 'delay';

// import { TimingAnimation, Easing } from 'react-spring/dist/addons';
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
    // const length = loaders.length !== 0 ? loaders.length : 3;

    return (
      <Wrapper>
        {loaders.map((loader: I.Loader) => {
          return (
            <LoaderItem key={loader.id} loader={loader} />
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

interface LoaderItemProps {
  loader: I.Loader;
}

class LoaderItem extends React.Component<LoaderItemProps> {
  render() {
    const { loader: { isFinished, progress } } = this.props;
    const pSize: number = progress.length - 1;

    const pFrom = progress[pSize - 1] || 0;
    const pTo = progress[pSize] || 0;

    const Container = Keyframes.Spring(async (next: any) => {
      console.log(next);
      while (!isFinished) {
        await next({
          reset: true,
          from: { progress: pFrom },
          to: { progress: pTo },
        });
        await next({
          reset: true,
          from: { progress: pTo },
          to: { progress: pFrom },
        });
      }
    });

    return (
      <Container >
        {(props: any) => <LoadBar progress={props.progress} opacity={1 / length} />}
      </Container >
    );
  }
}

// const LoaderItem: React.StatelessComponent<LoaderItemProps> = ({ loader: { progress, isFinished, id, isComputable }, length }) => {
//   console.log(id);
//   const pSize: number = progress.length - 1;

//   const pFrom = progress[pSize - 1] || 0;
//   const pTo = progress[pSize] || 0;

//   const Container = Keyframes.Spring(async (next: any) => {
//     console.log(next);
//     while (!isFinished) {
//       await next({
//         reset: true,
//         from: { progress: pFrom },
//         to: { progress: pTo },
//       });
//       await next({
//         reset: true,
//         from: { progress: pTo },
//         to: { progress: pFrom },
//       });
//     }
//   });

//   return (
//     <Container >
//       {(props: any) => <LoadBar progress={props.progress} opacity={1 / length} />}
//     </Container >
//   );
// };
const LoadBar: any = styled.div.attrs({
  style: (props: any) => ({
    width: `calc(100% * ${props.progress})`,
    background: getOpacity(props.opacity, color.secondary_dark),
  }),
})`
  position: absolute;
  height: 100%;
`;
