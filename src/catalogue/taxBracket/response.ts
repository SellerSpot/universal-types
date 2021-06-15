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

export interface ITaxBracketResponse extends IResponse {
    data: ITaxBracketData;
}

export interface ITaxGroupResponse extends IResponse {
    data: ITaxGroupData;
}

export interface IGetAllTaxBracketResponse extends IResponse {
    data: {
        brackets: ITaxBracketData[];
        groups: ITaxGroupData[];
    };
}
