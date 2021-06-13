import { IResponse } from '../../utilities';

export interface IPlugin {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    bannerImages: string[];
    iconName: string;
}

export interface IInstalledPlugin {
    plugin: IPlugin;
    createdAt?: string;
    updatedAt?: string;
}

export interface IGetAllPluginsResponse extends IResponse {
    data: IPlugin[];
}

export interface IInstallPluginResponse extends IResponse {
    data: IInstalledPlugin[];
}
