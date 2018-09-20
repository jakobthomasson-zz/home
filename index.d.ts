declare namespace Al {

  export interface Action<T = any> {
    readonly type: string;
    payload?: T
  }
}






