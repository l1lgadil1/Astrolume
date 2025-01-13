import { useState } from 'react';
import { MapStore } from './map-store';

export function useMapStore() {
    const [mapStore] = useState(
        () =>
            new MapStore({
                nodes: [
                    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
                    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
                ],
                edges: [{ id: 'e1-2', source: '1', target: '2' }],
            }),
    );
    return mapStore;
}
