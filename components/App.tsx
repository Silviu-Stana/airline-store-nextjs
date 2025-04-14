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
        <div className="max-w-sm md:max-w-md lg:max-w-xl mx-auto mt-20 p-6 rounded-4xl shadow-xl bg-white">
            <Panel
                goToPanel={setCurrentPanel}
                goToPreviousPanel={setCurrentPanel}
            />
        </div>
    );
}
