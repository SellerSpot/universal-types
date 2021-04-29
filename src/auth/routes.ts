import { ISignupTenantRequest, TSigninTenantRequest } from './auth.request';
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
     * auth server info
     *
     * @request  GET
     */
    INFO = '/info',

    /**
     * Signs in the user
     * @type {TSigninTenantRequest} requestBody
     * @type {ISignupTenantResponse} responseBody
     * @request  GET
     */
    SIGN_IN = '/signin',

    /**
     * Signs out the user
     * @request  POST
     */
    SIGN_OUT = '/signout',

    /**
     * get details about sign in user
     * @request  GET
     */
    CURRENT_USER = '/currentuser',
}
