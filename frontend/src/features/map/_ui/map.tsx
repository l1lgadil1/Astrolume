import '@xyflow/react/dist/style.css';

import { ReactFlowProvider } from '@xyflow/react';
import { Flow } from './flow';
import { ActionsPanel } from './controls/actions-panel';
import { ControlsLayout } from './controls/controls-layout';

export function Map() {
    return (
        <ReactFlowProvider>
            <div className="grow relative">
                <Flow />
                <ControlsLayout actionsPanel={<ActionsPanel />} />
            </div>
        </ReactFlowProvider>
    );
}
