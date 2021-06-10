import { IDomainDetails } from '../../auth';
import { IResponse } from '../../utilities';

export interface IDomainUpdateResponse extends IResponse {
    data: {
        domainDetails: IDomainDetails;
    };
}
