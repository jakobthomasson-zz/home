import * as React from 'react';
const connect = require('react-redux').connect;
// import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { modifyCounter } from 'src/store/tutorial/actions';
// import { Action } from 'src/store/tutorial/reducer';

import { Dispatch } from 'redux';
import { selectCounter, selectIsCounting } from 'src/store/tutorial/selectors';

interface TutorialPageProps extends React.Props<TutorialPage> {
  onModifyCounter: (counter: Payloads.Counter) => void;
  counter: number;
  isCounting: boolean;
}

class TutorialPage extends React.Component<TutorialPageProps, void> {

  public render(): React.ReactElement<{}> {
    const { onModifyCounter, counter, isCounting } = this.props;
    console.log('render of TutorialPage');

    return (
      <div>
        <p>{isCounting ? 'räknar' : 'räknar inte'}</p>
        <p>{counter}</p>
        <button onClick={() => onModifyCounter({ modifyBy: 3, timeout: 1000 })}>+3</button>
        <button onClick={() => onModifyCounter({ modifyBy: -1, timeout: 1000 })}>-1</button>

      </div>

    );
  }
}

function mapStateToProps() {
  return createStructuredSelector({
    counter: selectCounter(),
    isCounting: selectIsCounting(),
  });
}

function mapDispatchToProps(dispatch: Dispatch<I.Action>) {
  return {
    onModifyCounter: (counter: Payloads.Counter): void => {
      dispatch(modifyCounter(counter));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialPage);

// export default TutorialPage;
