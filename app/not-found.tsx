import { PanelProps } from '@/components/panels/panel-props';
const NotImplementedPanel: React.FC<PanelProps> = ({
    goToPanel,
    goToPreviousPanel,
}) => {
    return (
        <div className="flex flex-col items-center">
            <img src="/404.svg" alt="airplane" className="inline h-40 w-40" />
            <h1 className="font-bold text-teal-500 text-4xl">404</h1>
            <h2 className="text-2xl font-semibold text-center mb-4">
                This panel is not yet implemented!
            </h2>
        </div>
    );
};

export default NotImplementedPanel;
