export enum BILL_SETTINGS {
    /**
     * delete product from inventory
     * @method GET
     * @type {IGetBillSettingsResponse} responseBody
     */
    GET = '/billsettings',

    /**
     * udpate the bill settings
     * @method PUT
     * @type {IUpdateBillSettingsRequest} requestbody
     * @type {IUpdateBillSettingsResponse} responseBody
     */
    UPDATE = '/billsettings',
}
