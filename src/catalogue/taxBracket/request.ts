interface ITaxBracketRequest {
    name: string;
    rate: number;
}

interface ITaxGroupRequest {
    name: string;
    bracket: string[];
}

export type ICreateTaxBracketRequest = ITaxBracketRequest;
export type IEditTaxBracketRequest = ITaxBracketRequest;

export type ICreateTaxGroupRequest = ITaxGroupRequest;
export type IEditTaxGroupRequest = ITaxGroupRequest;
