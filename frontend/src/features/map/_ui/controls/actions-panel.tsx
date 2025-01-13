'use client';

import { FilePlus, ImagePlus } from 'lucide-react';
import { ActionButton } from './action-button';

export const ActionsPanel = () => {
    return (
        <div className="flex flex-col gap-1">
            <ActionButton icon={<ImagePlus />} title="Add image" onClick={() => {}} />
            <ActionButton icon={<FilePlus />} title="Add course" onClick={() => {}} />
        </div>
    );
};
