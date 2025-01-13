import type { Edge, Node } from '@xyflow/react';

export type NodeId = string;
export type EdgeId = string;
type CourseId = string;

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

type CourseNode = Node<CourseNodeData, 'number'>;
type ImageNode = Node<ImageNodeData, 'number'>;

export type MapNode = CourseNode | ImageNode;
export type MapEdge = Edge;
