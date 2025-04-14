import { PanelType } from '@/enums/PanelType';
import LoginPanel from './LoginPanel';
import NotImplementedPanel from './NotImplementedPanel';
import RegisterPanel from './RegisterPanel';

const panelComponents: Record<
    PanelType,
    React.FC<{ goToPanel: (panel: PanelType) => void }>
> = {
    [PanelType.Login]: LoginPanel, //✅
    [PanelType.Register]: RegisterPanel, //✅
    [PanelType.AddFlight]: NotImplementedPanel, //
    [PanelType.ModifyFlight]: NotImplementedPanel, //
    [PanelType.BookFlight]: NotImplementedPanel, //
    [PanelType.SearchFlight]: NotImplementedPanel, //
    [PanelType.MyReservations]: NotImplementedPanel, //
    [PanelType.SelectSeat]: NotImplementedPanel, //
    [PanelType.DeleteFlight]: NotImplementedPanel, //
    [PanelType.Help]: NotImplementedPanel, //
    [PanelType.Logout]: NotImplementedPanel, //
};

export default panelComponents;
