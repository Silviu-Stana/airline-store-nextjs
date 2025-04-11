'use client';
import { PanelType } from '@/enums/PanelType';
import { useState } from 'react';
import panelComponents from './panels/Panels';

export default function App() {
    const [currentPanel, setCurrentPanel] = useState<PanelType>(
        PanelType.Login
    );

    const Panel = panelComponents[currentPanel];

    if (!Panel) return <div>Panel not implemented yet.</div>;

    return (
        <div>
            <Panel goToPanel={setCurrentPanel} />
        </div>
    );
}
