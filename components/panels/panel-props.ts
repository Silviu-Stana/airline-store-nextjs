import { PanelType } from '@/enums/PanelType';

export interface PanelProps {
    goToPreviousPanel: (panel: PanelType) => void;
    goToPanel: (panel: PanelType) => void;
}
