export interface ITaxBracketRequest {
    name: string;
    rate: number;
}

export interface ITaxGroupRequest {
    name: string;
    bracket: string[];
}

// tax bracket
export type ICreateTaxBracketRequest = ITaxBracketRequest;
export type IEditTaxBracketRequest = ITaxBracketRequest;

// tax group
export type ICreateTaxGroupRequest = ITaxGroupRequest;
export type IEditTaxGroupRequest = ITaxGroupRequest;
