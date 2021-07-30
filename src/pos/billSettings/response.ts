import { IResponse } from '../../utilities';
import { IBillSettings } from './billSettings';

export interface IGetBillSettingsResponse extends IResponse {
    data: IBillSettings;
}

export interface IUpdateBillSettingsResponse extends IResponse {
    data: IBillSettings;
}
