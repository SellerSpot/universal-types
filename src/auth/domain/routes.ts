import { ICheckDomainAvailabilityResponse, IIdentifyStoreResponse } from './response';

export enum DOMAIN {
    /**
     * check if requested domain is available or not.
     *
     * @method GET
     * @query ?domain=<-domain-string->
     * @type {ICheckDomainAvailabilityResponse} responseBody
     *
     */
    CHECK_DOMAIN_AVAILABILITY = '/checkdomainavailability',
    /**
     * identifies and gives domain and tenant details if available
     *
     * @method GET
     * @query ?domain=<-domain-string->
     * @type {IIdentifyStoreResponse} responseBody
     *
     */
    IDENTIFY_STORE = '/identifystore',
}
