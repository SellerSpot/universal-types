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

export interface IUpdateStoreCurrencyResponse extends IResponse {
    data: IStoreCurrency;
}
