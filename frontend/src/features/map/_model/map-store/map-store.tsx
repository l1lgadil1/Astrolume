import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
} from '@xyflow/react';
import { makeAutoObservable, observable } from 'mobx';
import { MapEdge, MapNode } from '../../_domain/new-entities';

type MapParams = {
    nodes: MapNode[];
    edges: MapEdge[];
};
interface ReactFlowMethods {
    onNodesChange: OnNodesChange<MapNode>;
    onEdgesChange: OnEdgesChange<MapEdge>;
    onConnect: OnConnect;
    setNodes: (nodes: MapNode[]) => void;
    setEdges: (edges: MapEdge[]) => void;
}
export class MapStore implements ReactFlowMethods {
    edges: MapEdge[] = [];
    nodes: MapNode[] = [];
    constructor() { // params: MapParams
        // this.edges = params.edges;
        // this.nodes = params.nodes;
        makeAutoObservable(this, { edges: observable.ref, nodes: observable.ref });
    }
    setNodes(nodes: MapNode[]) {
        this.nodes = nodes;
    }
    onConnect: OnConnect = (params) => {
        this.edges = addEdge<MapEdge>(params, this.edges);
    };
    onNodesChange: OnNodesChange<MapNode> = (changes) => {
        this.nodes = applyNodeChanges<MapNode>(changes, this.nodes);
    };
    onEdgesChange: OnEdgesChange<MapEdge> = (changes) => {
        this.edges = applyEdgeChanges<MapEdge>(changes, this.edges);
    };
    setEdges(edges: MapEdge[]) {
        this.edges = edges;
    }
}

export const mapStore = new MapStore();
