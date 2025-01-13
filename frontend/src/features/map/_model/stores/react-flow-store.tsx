import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
} from '@xyflow/react';
import { makeAutoObservable, observable } from 'mobx';

import type { Edge, Node } from '@xyflow/react';

export type NodeId = string;
export type EdgeId = string;
export type CourseId = string;

export type NodeSettings = {
    hidden: boolean;
};

export type CourseNodeData = {
    courseId: CourseId;
    label: string;
    settings: NodeSettings;
};

export type ImageNodeData = {
    src: string;
    settings: NodeSettings;
};

type CourseNode = Node<CourseNodeData, 'course'>;
type ImageNode = Node<ImageNodeData, 'image'>;

export type FlowNode = CourseNode | ImageNode;
export type FlowEdge = Edge;

export class ReactFlowStore {
    edges: FlowEdge[] = [{ id: 'e1-2', source: '1', target: '2' }];
    nodes: FlowNode[] = [
        { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
        { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    ];
    constructor() {
        // params: MapParams
        // this.edges = params.edges;
        // this.nodes = params.nodes;
        makeAutoObservable(this, { edges: observable.ref, nodes: observable.ref });
    }
    setNodes(nodes: FlowNode[]) {
        this.nodes = nodes;
    }
    onConnect: OnConnect = (params) => {
        this.edges = addEdge<FlowEdge>(params, this.edges);
    };
    onNodesChange: OnNodesChange<FlowNode> = (changes) => {
        this.nodes = applyNodeChanges<FlowNode>(changes, this.nodes);
    };
    onEdgesChange: OnEdgesChange<FlowEdge> = (changes) => {
        this.edges = applyEdgeChanges<FlowEdge>(changes, this.edges);
    };
    setEdges(edges: FlowEdge[]) {
        this.edges = edges;
    }
}

export const reactFlowStore = new ReactFlowStore();
