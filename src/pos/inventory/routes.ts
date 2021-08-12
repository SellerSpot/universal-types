export enum INVENTORY {
    /**
     * Product addition to inventory.
     * @method POST
     * @type { IAddProductToInventoryRequest } requestBody
     * @type { IAddProductToInventoryResponse } responseBody
     */
    CREATE = '/inventories',
    /**
     * list all products in inventory
     * @method GET
     * @type { IGetAllInventoryProductResponse } responseBody
     */
    GET_ALL = '/inventories',
    /**
     * list all products in inventory
     * @method GET
     * @type { IInventoryResourcePathParam } pathParams
     * @type { IGetProductInventoryProductResponse } responseBody
     */
    GET_PRODUCT = '/inventories/product/:productid',
    /**
     * list all products in inventory
     * @method GET
     * @type { IInventoryResourcePathParam } pathParams
     * @type { IGetOutletInventoryProductResponse } responseBody
     */
    GET_OUTLET = '/inventories/outlet/:outletid',
    /**
     * @method GET
     * @type { IInventoryResourcePathParam } pathParams
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchInventoryProductsResponse } responseBody
     */
    SEARCH = '/inventories/search/:outletid?',
    /**
     * update product - inventory details
     * @method PUT
     */
    EDIT = '/inventories',
    /**
     * delete product from inventory
     * @method DELETE
     * @type { IInventoryResourcePathParam } pathParams
     */
    DELETE = '/inventories/:productid/:outletid?',
}
