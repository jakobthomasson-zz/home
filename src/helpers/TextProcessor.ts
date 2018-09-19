export interface IText {
  textRows: ITextRow[];
  textSentences?: ITextSentence[];
}

export interface ITextRow {
  id: number;
  text: string;
  words: string[];
  isRowValid: boolean;
  isBeginningNumber: boolean;
  isBeginningList: boolean;
}

export interface ITextSentence {
  rowsIds: number[];
}
export const regExps = {
  sentence_end: /\[.!?]/,
  beginning_is_number: /^^(\s*[\d\.\,\*]+\s+)/,
  beginning_is_list: /^(\s*([-]|([a-zA-Z][\)\.])|[•ㆍ]|(\([\d]+\)|\((x|\s+)\))|\d+\)))/, // squares not the same character
};

// interface IRule {

// }

class TextProcessor {
  private text: IText;

  constructor(textString: string) {
    this.text = this.toText(textString);
  }

  private toText(textString: string): IText {

    const textRows: ITextRow[] =
      textString.split('\n')
        .map((s, i) => {
          const words = s.split(/\s+/);
          return {
            words,
            text: s,
            id: i,
            isRowValid: this.isRowValid(words),
            isBeginningNumber: this.contains(regExps.beginning_is_number, s),
            isBeginningList: this.contains(regExps.beginning_is_list, s),
          };
        })
        .filter(row => row.isRowValid);

    // textRows.forEach((row: ITextRow) => console.log(row.text));

    const text: IText = {
      textRows,
    };

    return text;
  }

  // TODO:
  private isRowValid(words: string[]): boolean {
    // Om rad innehåller minst 1 ord 5 tecken eller mer.
    // Eller om rad innehåller stopp tecken och minst 2 ord
    const containsBigBoyWord = words.find(w => w.length >= 4) !== undefined;
    const containsEndOfSentence = this.contains(regExps.sentence_end, words.join(' '));
    let isValid = containsBigBoyWord || (containsEndOfSentence && words.length >= 2);

    if (!isValid) {
      isValid = words.join(' ') === ' ';

    }
    return isValid;

  }

  private contains(regExp: RegExp, text: string) {
    const result: null | RegExpExecArray = regExp.exec(text);
    return result ? true : false;

  }

  public getText(): IText {
    return this.text;
  }

}

export default TextProcessor;
