import { AUTH } from './auth/routes';
import { CATALOGUE } from './catalogue/routes';
import { CORE } from './core/routes';
import { ECOM } from './ecom/routes';
import { POS } from './pos/routes';

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
     * Contains all services
     */
    SERVICE,
    /**
     * Contains all auth related services
     */
    AUTH,
    /**
     * Contains all catalogue related services
     */
    CATALOGUE,
    /**
     * Contains all core related services
     */
    CORE,
    /**
     * Contains all ecom related services
     */
    ECOM,
    /**
     * Contains all pos related services
     */
    POS,
};
