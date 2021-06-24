import { IResponse } from '../../utilities';

export interface IStoreCurrency {
    name: string;
    code: string;
    symbol: string;
    id: string;
}

export interface IGetAllStoreCurrenciesResponse extends IResponse {
    data: IStoreCurrency[];
}
