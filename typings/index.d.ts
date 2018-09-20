
declare namespace I {
  export interface Action<T> {
    type: T;
  }

  export interface PayloadAction<T, P> extends Action<T> {
    payload: P;
  }

  export interface Loader {
    readonly id: number;
    readonly progress: number[];
    readonly isComputable: boolean;
    readonly isFinished: boolean;
  }
}

declare namespace Payloads {
  export interface Counter {
    timeout: number;
    modifyBy: number;
  }
}


