import { REQUEST_METHOD } from '../utilities';
import { ISignupTenantRequest, ISigninTenantRequest } from './auth.request';
import { ISignupTenantResponse } from './auth.response';

/**
 * contains all routes related to auth service
 */
export enum AUTH {
    /**
     * auth server info
     *
     * @request  @type {REQUEST_METHOD.GET}
     */
    INFO = '/info',

    /**
     * Signs up the user
     *
     * @request  @type {REQUEST_METHOD.POST}
     * @type {ISignupTenantRequest} requestBody
     * @type {ISignupTenantResponse} responseBody
     */
    SIGN_UP = '/signup',

    /**
     * Signs in the user
     *
     * @request  @type {REQUEST_METHOD.POST}
     * @type {ISigninTenantRequest} requestBody
     * @type {ISignupTenantResponse} responseBody
     */
    SIGN_IN = '/signin',

    /**
     * Signs out the user
     *
     * @request  @type {REQUEST_METHOD.POST}
     */
    SIGN_OUT = '/signout',

    /**
     * get details about sign in user
     *
     * @request  @type {REQUEST_METHOD.GET}
     */
    CURRENT_USER = '/currentuser',
}
