export interface ITaxBracketData {
    id: string;
    name: string;
    /**
     * incase of group it contains, the total rate of the group
     */
    rate: number;
    /**
     * filled with with
     */
    group?: string[] | Omit<ITaxBracketData, 'group'>[];
    createdAt?: string;
    updatedAt?: string;
}
