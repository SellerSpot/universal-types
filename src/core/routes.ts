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

    /**
     * Deletes current tenant in the scope and all related resources associated with that eg. domain, db
     *
     * @method DELETE
     */
    DELETE_TENANT = '/deletetenant',
}
