import { PanelType } from '@/enums/PanelType';
import LoginPanel from './LoginPanel';
import NotImplementedPanel from './NotImplementedPanel';
import RegisterPanel from './RegisterPanel';

const panelComponents: Record<
    PanelType,
    React.FC<{ goToPanel: (panel: PanelType) => void }>
> = {
    [PanelType.Login]: LoginPanel,
    [PanelType.Register]: RegisterPanel,
    [PanelType.AddFlight]: NotImplementedPanel,
    [PanelType.ModifyFlight]: NotImplementedPanel,
    [PanelType.BookFlight]: NotImplementedPanel,
    [PanelType.BuyFlight]: NotImplementedPanel,
    [PanelType.SearchFlight]: NotImplementedPanel,
    [PanelType.FlightsList]: NotImplementedPanel,
    [PanelType.BookSeat]: NotImplementedPanel,
    [PanelType.DeleteFlight]: NotImplementedPanel,
    [PanelType.Help]: NotImplementedPanel,
    [PanelType.Exit]: NotImplementedPanel,
};

export default panelComponents;
