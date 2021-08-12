export interface IProductSearchPathParam {
    query: string;
}

export enum PRODUCT {
    /**
     * @method GET
     * @type {IGetAllProductResponse} responseBody
     */
    GET_ALL = '/products',
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type {IGetProductResponse} responseBody
     */
    GET = '/products/:id',
    /**
     * @method GET
     * @type {IProductSearchPathParam} pathParams
     * @type {ISearchProductResponse} responseBody
     */
    SEARCH = '/products/search',
    /**
     * @method POST
     * @type {ICreateProductRequest} requestBody
     * @type {ICreateProductResponse} responseBody
     */
    CREATE = '/products',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type {IEditProductRequest} requestBody
     * @type {IEditProductResponse} responseBody
     */
    EDIT = '/products/:id',
    /**
     * @method DELETE
     * @type { ICommonResourcePathParam } pathParams
     */
    DELETE = '/products/:id',
}
