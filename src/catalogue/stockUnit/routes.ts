export enum STOCK_UNIT {
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type {IGetStockUnitResponse} - responseBody
     */
    GET = '/stockunits/:id',
    /**
     * @method GET
     * @type {IGetAllStockUnitResponse} - responseBody
     */
    GET_ALL = '/stockunits',
    /**
     * @method GET
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchStockUnitResponse } responseBody
     */
    SEARCH = '/stockunits/search',
    /**
     * @method POST
     * @type {ICreateStockUnitRequest} - requestBody
     * @type {ICreateStockUnitResponse} - responseBody
     */
    CREATE = '/stockunits',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type {IEditStockUnitRequest} - requestBody
     * @type {IEditStockUnitResponse} - responseBody
     */
    EDIT = '/stockunits/:id',
    /**
     * @method DELETE
     * @type { ICommonResourcePathParam } pathParams
     * @type {IDeleteStockUnitResponse} - responseBody
     */
    DELETE = '/stockunits/:id',
}
