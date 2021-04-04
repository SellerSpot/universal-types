export { default as routes } from './routes';

// core utitlities
export * from './utilities';

// service exports
export * as authTypes from './auth';
export * as coreTypes from './core';
export * as posTypes from './pos';
export * as ecomTypes from './ecom';

import { createLogger } from 'winston';

export const Logger = createLogger();
