import { default as auth } from './auth/routes';
import { default as catalogue } from './catalogue/routes';
import { default as core } from './core/routes';
import { default as ecom } from './ecom/routes';
import { default as pos } from './pos/routes';

const service = {
    /**
     * auth service
     */
    AUTH: '/auth',
    /**
     * Point of sale service
     */
    POS: '/pos',
    /**
     * catalogure service
     */
    CATALOGUE: '/catalogue',
    /**
     * core will be the base route
     */
    CORE: '',
};

export default {
    /**
     * Contains all services
     */
    service,
    /**
     * Contains all auth related services
     */
    auth,
    /**
     * Contains all catalogue related services
     */
    catalogue,
    /**
     * Contains all core related services
     */
    core,
    /**
     * Contains all ecom related services
     */
    ecom,
    /**
     * Contains all pos related services
     */
    pos,
};
