export interface ITaxBracketRequest {
    name: string;
    rate: number;
}

export interface ITaxGroupRequest {
    name: string;
    bracket: string[];
}
