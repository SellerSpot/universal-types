import { IAddProductToInventoryRequest, IEditProductInInventoryRequest } from './request';
import {
    IAddProductToInventoryResponse,
    IEditProductInInventoryResponse,
    IGetAllInventoryProductResponse,
    IGetInventoryByOutletIdResponse,
    IGetInventoryByProductIdResponse,
    ISearchInventoryProductsResponse,
} from './response';
import { IInventoryResourcePathParam } from './inventory';
import { ISearchResourceQueryParam } from './../../utilities/common';

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
     * get inventory based on product id
     * @method GET
     * @type { IInventoryResourcePathParam } pathParams
     * @type { IGetInventoryByProductIdResponse } responseBody
     */
    GET_BY_PRODUCT_ID = '/inventories/product/:productid',
    /**
     * get inventory based on outlet id
     * @method GET
     * @type { IInventoryResourcePathParam } pathParams
     * @type { IGetInventoryByOutletIdResponse } responseBody
     */
    GET_BY_OUTLET_ID = '/inventories/outlet/:outletid',
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
     * @type { IEditProductInInventoryRequest } requestBody
     * @type { IEditInventoryProductResponse } responseBody
     */
    EDIT = '/inventories',
    /**
     * delete product from inventory
     * @method DELETE
     * @type { IInventoryResourcePathParam } pathParams
     */
    DELETE = '/inventories/:productid/:outletid?',
}
