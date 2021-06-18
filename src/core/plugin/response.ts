import { IResponse } from '../../utilities';

export interface IPlugin {
    pluginId: string;
    name: string;
    isVisibleInPluginMenu: boolean;
    isVisibleInPluginStore: boolean;
    dependantPlugins: string[] | IPlugin[];
    shortDescription: string;
    longDescription: string;
    icon: string;
    image: string;
    bannerImages: string[];
}

export interface IInstalledPlugin {
    plugin: IPlugin;
    createdAt?: string;
    updatedAt?: string;
}

export interface IGetAllPluginsResponse extends IResponse {
    data: IPlugin[];
}
export interface IGetPluginDetailsByIdResponse extends IResponse {
    data: IPlugin;
}

export interface IInstallPluginResponse extends IResponse {
    data: IInstalledPlugin[];
}
export interface IUnInstallPluginResponse extends IResponse {
    data: IInstalledPlugin[];
}
