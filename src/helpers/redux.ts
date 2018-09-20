export function createAction<T extends string>(type: T): I.Action<T> {
  return { type };
}

export function createPayloadAction<T extends string, P>(type: T, payload: P): I.PayloadAction<T, P> {
  return { type, payload };
}
