export interface ITaxBracketData {
    id: string;
    name: string;
    rate: number;
}

export interface ITaxGroupData {
    id: string;
    name: string;
    bracket: string[] | ITaxBracketData[];
}
