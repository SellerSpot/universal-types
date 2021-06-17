import { IDomainUpdateRequest } from './domain/request';
import { IDomainUpdateResponse } from './domain/response';
import {
    IGetPluginDetailByIdRequest,
    IInstallPluginRequest,
    IUnInstallPluginRequest,
} from './plugin/request';
import {
    IGetAllPluginsResponse,
    IGetPluginDetailsByIdResponse,
    IInstallPluginResponse,
    IUnInstallPluginResponse,
} from './plugin/response';

/**
 * contains all routes related to core service
 */
export enum CORE {
    /**
     * core server info
     *
     * @method GET
     */
    INFO = '/info',

    // tenant related routes
    /**
     * Deletes current tenant in the scope and all related resources associated with that eg. domain, db
     *
     * @method DELETE
     */
    DELETE_TENANT = '/deletetenant',

    // domain related routes
    /**
     * Updates the domain for the current tenant
     * @method PUT
     * @type {IDomainUpdateRequest} requestBody
     * @type {IDomainUpdateResponse} responseBody
     */
    UPDATE_DOMAIN = '/updatedomain',

    // plugin related routes
    /**
     * gives all available plugins
     * @method GET
     * @type {IGetAllPluginsResponse} responseBody
     */
    GET_ALL_PLUGINS = '/plugins',
    /**
     * get plugin details by id
     * @method GET
     * @type {IGetPluginDetailByIdRequest} - paramBody
     * @type {IGetPluginDetailsByIdResponse} responseBody
     */
    GET_PLUGIN_DETAILS_BY_ID = '/plugins/:id',
    /**
     * Installs a plugin for the current tenant
     * @method POST
     * @type {IInstallPluginRequest} paramBody
     * @type {IInstallPluginResponse} responseBody
     */
    INSTALL_PLUGIN = '/plugins/:id/install',
    /**
     * Uninstalls a plugin for the current tenant
     * @method DELETE
     * @type {IUnInstallPluginRequest} paramBody
     * @type {IUnInstallPluginResponse} responseBody
     */
    UNINSTALL_PLUGIN = '/plugins/:id/uninstall',
}
