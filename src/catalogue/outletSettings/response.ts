import { IResponse } from '../../utilities';
import { IOutletSettingData } from './outletSettings';

export interface IGetOutletSettingResponse extends IResponse {
    data: IOutletSettingData;
}
export interface IUpdateOutletSettingResponse extends IResponse {
    data: IOutletSettingData;
}
