import { PanelType } from '@/enums/PanelType';

const NotImplementedPanel: React.FC<{
    goToPanel: (panel: PanelType) => void;
}> = () => (
    <div
        className="flex flex-col items-center
    max-w-md mx-auto mt-10 p-10 rounded-4xl shadow-xl bg-white"
    >
        <h1 className="font-bold text-red-500 text-4xl">404</h1>
        <h2 className="text-2xl font-semibold text-center mb-4">
            Panel not found!
        </h2>
    </div>
);

export default NotImplementedPanel;
