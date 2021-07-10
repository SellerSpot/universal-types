export enum BRAND {
    /**
     * @method GET
     * @type { IGetBrandResponse } responseBody
     */
    GET = '/brands/:id',
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type { IGetAllBrandResponse } responseBody
     */
    GET_ALL = '/brands',
    /**
     * @method POST
     * @type { ICreateBrandRequest } requestBody
     * @type { ICreateBrandResponse } responseBody
     */
    CREATE = '/brands',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type { IEditBrandRequest } requestBody
     * @type { IEditBrandResponse } requestBody
     */
    EDIT = '/brands/:id',
    /**
     * @type { ICommonResourcePathParam } pathParams
     * @method DELETE
     */
    DELETE = '/brands/:id',
}
