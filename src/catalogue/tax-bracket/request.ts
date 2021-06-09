export interface ICreateTaxBracketRequest {
    name: string;
    rate: number;
}

export interface ICreateTaxGroupRequest {
    name: string;
    bracket: string[];
}

export interface IEditTaxBracketRequest {
    name: string;
    rate: number;
}

export interface IEditTaxGroupRequest {
    name: string;
    bracket: string[];
}
