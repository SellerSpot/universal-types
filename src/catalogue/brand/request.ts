import { IBrandData } from './brand';

export type ICreateBrandRequest = Pick<IBrandData, 'name'>;

export type IEditBrandRequest = Pick<IBrandData, 'name'>;
