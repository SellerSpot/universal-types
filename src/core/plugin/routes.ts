import {
    IGetPluginDetailByIdRequest,
    IInstallPluginRequest,
    IUnInstallPluginRequest,
} from './request';
import {
    IGetAllPluginsResponse,
    IGetPluginDetailsByIdResponse,
    IInstallPluginResponse,
    IUnInstallPluginResponse,
} from './response';

export enum PLUGIN {
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
