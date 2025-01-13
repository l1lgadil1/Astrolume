import { makeAutoObservable } from 'mobx';
import { EdgeEntity, NodeEntity } from '../../_domain/node';

export class MapRepository {
    nodes: NodeEntity[] = [];
    edges: EdgeEntity[] = [];

    constructor() {
        makeAutoObservable(this);
    }
}
export const mapRepository = new MapRepository();
