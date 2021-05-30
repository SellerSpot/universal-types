import { IResponse } from '../../utilities';

interface IBrandData {
    id: string;
    name: string;
    description: string;
}

export interface IGetAllBrandsResponse extends IResponse {
    data: IBrandData[];
}
