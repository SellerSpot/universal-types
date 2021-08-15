export enum OUTLET_SETTING {
    /**
     * get outlet settings
     * @method GET
     * @type {IGetOutletSettingsResponse} responseBody
     */
    GET = '/outletsettings',

    /**
     * udpate the outlet settings
     * @method PUT
     * @type {IUpdateOutletSettingsRequest} requestbody
     * @type {IUpdateOutletSettingsResponse} responseBody
     */
    UPDATE = '/outletsettings',
}
