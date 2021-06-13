import { ERROR_CODE, TErrorCodeKeys } from './errorCode';
/**
 * Typings for error in API response
 */
export interface IErrorResponse {
    code: ERROR_CODE;
    key?: TErrorCodeKeys;
    message?: string;
    errors?: { name: string; message: string }[];
}

/**
 * Typings for response for APIs
 */

export interface IResponse {
    /**
     * Denotes the success status of the API request
     * - True - Operation Successful
     * - False - Operation Failed
     */
    status: boolean;
    // differs with the service - but is consistent with the responseType of the api
    data?: unknown;
    // in case there are errors
    error?: IErrorResponse;
}
