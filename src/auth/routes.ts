import { ISignupTenantRequest } from './auth.request';
import { ISignupTenantResponse } from './auth.response';

/**
 * contains all routes related to auth service
 */
export enum AUTH {
    /**
     * Signs up the user
     *
     * @request  POST
     * @type {ISignupTenantRequest} requestBody
     * @type {ISignupTenantResponse} responseBody
     */
    SIGN_UP = '/signup',

    /**
     * Signs up the user
     *
     * @request  GET
     */
    INFO = '/info',

    /**
     * Signs out the user
     * @request  POST
     */
    SIGN_OUT = '/signout',
}
