import { IResponse } from '../../utilities';

export interface ITaxBracketData {
    id: string;
    name: string;
    rate: number;
}

export interface ITaxGroupData {
    id: string;
    name: string;
    rate: number;
    bracket: ITaxBracketData[];
}

export interface IGetTaxBracketResponse extends IResponse {
    data: ITaxBracketData;
}

export interface IEditTaxBracketResponse extends IResponse {
    data: ITaxBracketData;
}

export interface IGetTaxGroupResponse extends IResponse {
    data: ITaxGroupData;
}

export interface IEditTaxGroupResponse extends IResponse {
    data: ITaxGroupData;
}

export interface IGetAllTaxsResponse extends IResponse {
    data: {
        brackets: ITaxBracketData[];
        groups: ITaxGroupData[];
    };
}
