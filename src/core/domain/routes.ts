import { IDomainUpdateRequest } from './request';
import { IDomainUpdateResponse } from './response';

export enum DOMAIN {
    /**
     * Updates the domain for the current tenant
     * @method PUT
     * @type {IDomainUpdateRequest} requestBody
     * @type {IDomainUpdateResponse} responseBody
     */
    UPDATE_DOMAIN = '/updatedomain',
}
