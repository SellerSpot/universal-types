/**
 * used to derive arugument list from the function
 * useful when props needs to be derived from a interface property's function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ArgumentsType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any
    ? A
    : never;

export interface ICommonResourcePathParam {
    id: string;
}

export interface ISearchResourceQueryParam {
    query: string;
}

/**
 * deep partial used to make the object properties partial up to the depth n
 */
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
