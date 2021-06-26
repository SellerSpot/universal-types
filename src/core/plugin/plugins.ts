export enum EPLUGINS {
    POINT_OF_SALE,
    CATALOGUE,
}

export const getPluginByName = (pluginName: keyof typeof EPLUGINS): string =>
    EPLUGINS[EPLUGINS[pluginName]];
