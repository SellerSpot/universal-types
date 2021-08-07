import { IOutletData } from '..';
import { IResponse } from '../../utilities';

export interface IGetAllOutlet extends IResponse {
    data: IOutletData[];
}
