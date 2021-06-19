import { ISigninTenantRequest, ISignupTenantRequest } from './request';
import { ISignupTenantResponse } from './response';

export enum AUTH {
    /**
     * Signs up the user
     *
     * @method POST
     * @type {ISignupTenantRequest} requestBody
     * @type {ISignupTenantResponse} responseBody
     */
    SIGN_UP = '/signup',

    /**
     * Signs in the user
     *
     * @method POST
     * @type {ISigninTenantRequest} requestBody
     * @type {ISignupTenantResponse} responseBody
     */
    SIGN_IN = '/signin',

    /**
     * Signs out the user
     *
     * @method POST
     */
    SIGN_OUT = '/signout',

    /**
     * get details about sign in user
     *
     * @method GET
     */
    CURRENT_USER = '/currentuser',
}
