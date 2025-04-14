import { PanelType } from '@/enums/PanelType';
import { NotImplementedPanel } from './NotImplementedPanel';
import { LoginPanel } from './LoginPanel';
import { RegisterPanel } from './RegisterPanel';
import { SearchPanel } from './SearchPanel';
import { HomepagePanel } from './HomepagePanel';
const panelComponents: Record<
    PanelType,
    React.FC<{
        goToPanel: (panel: PanelType) => void;
        goToPreviousPanel: (panel: PanelType) => void;
    }>
> = {
    [PanelType.Login]: LoginPanel, //✅
    [PanelType.Register]: RegisterPanel, //✅
    [PanelType.Homepage]: HomepagePanel, //✅
    [PanelType.AddFlight]: NotImplementedPanel, //
    [PanelType.SearchFlight]: SearchPanel, //
    [PanelType.ModifyFlight]: NotImplementedPanel, //
    [PanelType.BookFlight]: NotImplementedPanel, //
    [PanelType.MyReservations]: NotImplementedPanel, //
    [PanelType.SelectDate]: NotImplementedPanel, //
    [PanelType.SelectSeat]: NotImplementedPanel, //
    [PanelType.DeleteFlight]: NotImplementedPanel, //
    [PanelType.Help]: NotImplementedPanel, //
    [PanelType.Logout]: NotImplementedPanel, //
};

export default panelComponents;
