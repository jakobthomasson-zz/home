
declare namespace I {

  export interface Action<T = any> {
    type: string;
    payload?: T
  }
  export interface Loader {
    readonly id: number;
    readonly progress: number[];
    readonly isComputable: boolean;
    readonly isFinished: boolean;
  }


}






