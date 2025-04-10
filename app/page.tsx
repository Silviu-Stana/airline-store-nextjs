import Image from 'next/image';
import { BsFillAirplaneFill } from 'react-icons/bs';

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-cyan-500 text-6xl flex flex-row gap-5 justify-center pt-20">
                Vacanța începe aici.
            </h1>
            <div className="flex justify-center gap-2 lg:gap-5 md:gap-3 p-5 lg:p-20 md:p-10 sm:p-5">
                <div
                    className="w-64 md:w-56 lg:w-70 h-27 bg-white rounded-2xl
                    transition-all
                    shadow-[0_4px_8px_rgba(0,154,206,0.3)] hover:shadow-[0_6px_24px_rgba(0,154,206,.6)] "
                >
                    <div className="ml-5 mt-5 text-gray-500">From</div>
                    <div className="ml-5 font-medium text-[18px] text-cyan-500">
                        Bucuresti
                    </div>
                    <div className="ml-5 text-[13px] text-cyan-800 font-bold ">
                        Romania
                    </div>
                </div>
                <div
                    className="w-64 md:w-56 lg:w-70 h-27 bg-white rounded-2xl
                transition-all
                shadow-[0_4px_8px_rgba(0,154,206,0.3)] hover:shadow-[0_6px_24px_rgba(0,154,206,.6)] 
                "
                >
                    <div className="ml-5 mt-5 text-gray-500">To</div>
                    <div className="ml-5 font-medium text-[18px] text-cyan-500">
                        Sofia
                    </div>
                    <div className="ml-5 text-[13px] text-cyan-800 font-bold ">
                        Bulgaria
                    </div>
                </div>
                <div
                    className="w-64 md:w-56 lg:w-70 h-27 bg-white rounded-2xl
                transition-all
                shadow-[0_4px_8px_rgba(0,154,206,0.3)] hover:shadow-[0_6px_24px_rgba(0,154,206,.6)] 
                "
                >
                    <div className="ml-5 mt-5 text-gray-500">Ziua</div>
                    <div className="ml-5 font-medium text-[18px] text-cyan-500">
                        4/10/2025
                    </div>
                    <div className="ml-5 text-[13px] text-cyan-800 font-bold ">
                        Astazi
                    </div>
                </div>
            </div>

            <button
                className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-64 h-14 bg-white shadow-md rounded-2xl font-semibold text-lg
                hover:text-xl transition-all duration-300
                hover:bg-cyan-300 mt-5"
            >
                <span>
                    <BsFillAirplaneFill size={20} />
                </span>
                Book Your Flight
            </button>
        </div>
    );
}
