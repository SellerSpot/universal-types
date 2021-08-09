export enum OUTLET {
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type { IGetOutletResponse } responseBody
     */
    GET = '/outlets/:id',
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type { IGetAllOutletResponse } responseBody
     */
    GET_ALL = '/outlets',
    /**
     * @method GET
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchOutletResponse } responseBody
     */
    SEARCH = '/outlets/search',
    /**
     * @method POST
     * @type { ICreateBrandRequest } requestBody
     * @type { ICreateOutletResponse } responseBody
     */
    CREATE = '/outlets',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type { IEditOutletResponse } requestBody
     */
    EDIT = '/outlets/:id',
    /**
     * @method DELETE
     * @type { ICommonResourcePathParam } pathParams
     */
    DELETE = '/outlets/:id',
}
