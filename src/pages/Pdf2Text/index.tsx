import * as React from 'react';
import styled from 'styled-components';
// const training1 = require('./text/training1.txt');
import TextProcessor, { ITextRow, IText } from 'src/helpers/TextProcessor';
// const training2 = require('./text/training2');
// const training3 = require('./text/training3');
const training = require('./text/training1.txt');
import { TextMainHeading, TextSecondaryHeading, TextSubHeading, TextSubSubHeading } from 'src/components/Heading';
import { NormalText } from 'src/components/Text';
import { fibonacing } from 'src/theme';

interface Pdf2TextPageProps extends React.Props<Pdf2TextPage> {
}
interface Pdf2TextPageState {
  processedText: IText;
}

const Wrapper = styled.div`
  padding: ${fibonacing._13};
`;

class Pdf2TextPage extends React.Component<Pdf2TextPageProps, Pdf2TextPageState> {

  constructor(props: Pdf2TextPageProps) {
    super(props);
    this.state = {
      processedText: {
        textRows: [],
      },
    };
  }

  private fetchText(textFile: 'training1' | 'training2' | 'training3' | 'training4') {
    const rawFile = new XMLHttpRequest();
    rawFile.open('GET', training, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          const allText = rawFile.responseText;

          const TP = new TextProcessor(allText);
          console.log(TP);

          this.setState({
            processedText: TP.getText(),
          });
        }
      }
    };
    rawFile.send(undefined);
  }

  private getColor(row: ITextRow): string {
    const red: string = '#ff0000';
    // const green: string = '#3cb371';
    const yellow: string = '#ffa500';
    // const blue: string = '#0000ff';
    const pink: string = '#ee82ee';
    // const violet: string = '#6a5acd';
    let color = '';

    if (!row.isRowValid) {
      color = red;
    } else if (row.isBeginningList) {
      color = yellow;
    } else if (row.isBeginningNumber) {
      color = pink;
    }
    return color;
  }

  private renderRow(row: ITextRow) {
    if (row.isBeginningNumber && row.isRowValid) {
      const matchs = row.words[0].match(new RegExp(/\./, 'g')) || [''];
      const lastCharDot = (row.words[0].charAt(row.words[0].length - 1)) === '.';
      const level = matchs.length - (lastCharDot ? 1 : 0);
      console.log(`text: ${row.words[0]} - level: ${level}, isLastDot: ${lastCharDot} `);
      switch (level) {
        case 0:
          return <TextMainHeading key={row.id}>{row.text}</TextMainHeading>;
        case 1:
          return <TextSecondaryHeading key={row.id}>{row.text}</TextSecondaryHeading>;
        case 2:
          return <TextSubHeading key={row.id}>{row.text}</TextSubHeading>;
        default:
          return <TextSubSubHeading key={row.id}>{row.text}</TextSubSubHeading>;
      }

    }

    return <NormalText key={row.id} style={{ minHeight: '20px', color: this.getColor(row) }}>{row.words.join(' ')}</NormalText>;
  }

  public render(): React.ReactElement<{}> {
    const { processedText } = this.state;
    console.log('render of Pdf2TextPage');

    return (
      <Wrapper>
        <button onClick={() => this.fetchText('training1')} > test</button>
        {processedText.textRows.map((row: ITextRow) => this.renderRow(row))}
      </Wrapper>
    );
  }
}

export default Pdf2TextPage;
