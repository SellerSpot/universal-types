import { IOutletData } from '..';
import { IResponse } from '../../utilities';

export interface IGetAllOutletResponse extends IResponse {
    data: IOutletData[];
}
