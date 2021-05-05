import { ISignupTenantRequest, ISigninTenantRequest } from './auth/request';
import { ISignupTenantResponse } from './auth/response';
import { ICheckDomainAvailabilityResponse } from './domain/response';

/**
 * contains all routes related to auth service
 */
export enum AUTH {
    /**
     * auth server info
     *
     * @method GET
     */
    INFO = '/info',

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

    // domain related endpoints

    /**
     * check if requested domain is available or not.
     *
     * @method GET
     * @query ?domain=<-domain-string->
     * @type {ICheckDomainAvailabilityResponse} responseBody
     *
     */
    CHECK_DOMAIN_AVAILABILITY = '/checkdomainavailability',
}
