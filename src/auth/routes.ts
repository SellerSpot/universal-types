import { ISignupTenantRequest } from './auth.request';
import { ISignupTenantResponse } from './auth.response';

/**
 * contains all routes related to auth service
 */
export default {
    /**
     * Signs up the user
     *
     * @request  POST
     * @type {ISignupTenantRequest} requestBody
     * @type {ISignupTenantResponse} responseBody
     */
    SIGN_UP: '/signup',
};
