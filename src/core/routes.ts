import { IDomainUpdateRequest } from './domain/request';
import { IDomainUpdateResponse } from './domain/response';

/**
 * contains all routes related to core service
 */
export enum CORE {
    /**
     * core server info
     *
     * @method GET
     */
    INFO = '/info',

    // tenant related routes
    /**
     * Deletes current tenant in the scope and all related resources associated with that eg. domain, db
     *
     * @method DELETE
     */
    DELETE_TENANT = '/deletetenant',

    // domain related routes
    /**
     * Updates the domain for the current tenant
     * @method PUT
     * @type {IDomainUpdateRequest} requestBody
     * @type {IDomainUpdateResponse} responseBody
     */
    UPDATE_DOMAIN = '/updatedomain',
}
