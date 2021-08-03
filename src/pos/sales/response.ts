import { IResponse } from '../../utilities';
import { ISaleData } from './sales';

export interface IGetAllSalesHistoryResponse extends IResponse {
    data: {
        salesHistory: ISaleData[];
        // pagination might be added here in the future
    };
}
