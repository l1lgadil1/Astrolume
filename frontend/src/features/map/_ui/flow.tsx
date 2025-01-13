'use client';

import { ReactFlow } from '@xyflow/react';
import { reactFlowStore } from '../_model/stores/react-flow-store';
import { observer } from 'mobx-react-lite';

// const initialNodes = [
//     { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//     { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export const Flow = observer(() => {
    return (
        <div style={{ height: '100vh', width: '100vw' }} className="absoulute">
            <ReactFlow
                {...reactFlowStore}
                onNodesDelete={() => {}}
                onNodeDragStop={() => {}}
                onSelectionDragStop={() => {}}
            />
        </div>
    );
});
