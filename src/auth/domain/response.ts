import { IResponse } from '../../utilities';
import { IStoreDetails } from '../auth/response';

export type ICheckDomainAvailabilityResponse = IResponse;

export type IIdentifyStoreResponse = IResponse & {
    data: {
        store: IStoreDetails;
    };
};
