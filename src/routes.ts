import * as AUTH from './auth/routes';
import * as CORE from './core/routes';
import * as CATALOGUE from './catalogue/routes';
import * as ECOM from './ecom/routes';
import * as POS from './pos/routes';

enum SERVICE {
    /**
     * auth service
     */
    AUTH = '/auth',
    /**
     * Point of sale service
     */
    POS = '/pos',
    /**
     * catalogure service
     */
    CATALOGUE = '/catalogue',
    /**
     * core will be the base route
     */
    CORE = '/core',
}

export default {
    /**
     * Contains all service base routes
     */
    SERVICE,
    /**
     * Contains all auth related routes
     */
    AUTH: {
        /**
         * auth server info
         * @method GET
         */
        INFO: '/info',
        ...AUTH,
    },
    /**
     * Contains all catalogue related routes
     */
    CATALOGUE: {
        /**
         * catalogue server info
         * @method GET
         */
        INFO: '/info',
        ...CATALOGUE,
    },
    /**
     * Contains all core related routes
     */
    CORE: {
        /**
         * core server info
         * @method GET
         */
        INFO: '/info',
        ...CORE,
    },
    /**
     * Contains all ecom related routes
     */
    ECOM: {
        /**
         * ecom server info
         * @method GET
         */
        INFO: '/info',
        ...ECOM,
    },
    /**
     * Contains all pos related routes
     */
    POS: {
        /**
         * pos server info
         * @method GET
         */
        INFO: '/info',
        ...POS,
    },
};
