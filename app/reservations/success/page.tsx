'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaHome } from 'react-icons/fa';

const SuccessPanel = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-5 text-cyan-400 text-5xl md:text-6xl lg:text-7xl text-center">
                Reservation
            </h1>
            <h1 className="text-cyan-400 text-3xl md:text-4xl lg:text-5xl text-center">
                Successfully Created
            </h1>
            <div className="relative -mt-10">
                <svg
                    className="-mt-3 w-[400px] h-90 md:h-full"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="100%"
                    viewBox="0 0 736 736"
                    enableBackground="new 0 0 736 736"
                    xmlSpace="preserve"
                >
                    <path
                        fill="none"
                        stroke="#00D3F3"
                        strokeWidth="20"
                        d="
            M82.380051,337.484131 
                C100.230461,300.950287 128.961914,279.173767 168.471756,271.766266 
                C182.663864,269.105377 196.989487,269.446198 211.033005,272.831970 
                C215.795242,273.980103 217.375153,272.346283 219.125885,268.425812 
                C232.420563,238.654648 253.562256,216.100357 282.162323,200.452530 
                C335.650391,171.187759 405.904663,181.521912 448.698853,225.018448 
                C455.282684,231.710297 455.282684,231.710312 464.346710,227.756485 
                C504.753815,210.130508 550.421692,225.385117 573.108582,264.283051 
                C575.213013,267.891113 577.094299,268.877747 581.360962,268.139618 
                C640.887878,257.842133 693.444946,298.180725 702.029053,354.284088 
                C710.518127,409.766510 675.053284,460.109955 620.083435,471.834778 
                C612.759094,473.397034 605.271057,474.331818 597.799133,473.933655 
                C594.195740,473.741608 592.892273,474.947083 591.662720,478.009430 
                C577.806824,512.519653 553.567078,536.582825 517.834473,547.239990 
                C476.725433,559.500610 439.175385,551.533936 406.496918,523.249573 
                C403.004852,520.227112 401.056946,521.052307 398.200897,523.640442 
                C376.446106,543.354614 350.591187,552.293945 321.583740,550.056274 
                C285.173553,547.247620 257.593323,529.193909 239.003662,497.798828 
                C236.368118,493.347809 234.433823,492.376434 229.350983,494.186127 
                C181.677231,511.160004 139.436493,501.627197 103.693283,466.137360 
                C85.580132,448.152649 75.635628,425.600372 72.551155,400.057220 
                C69.928246,378.336456 73.114426,357.657043 82.380051,337.484131 
            z"
                    />
                </svg>
                <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-32 h-32 p-1 fill-cyan-300 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
            </div>
            <button
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-4 border-cyan-400 border-2 w-64 h-18 shadow-md rounded-full font-bold text-lg text-cyan-400
                                hover:text-xl transition-all duration-300
                                hover:bg-cyan-300 mt-5 hover:text-white"
            >
                <FaHome size={35} />
            </button>
        </div>
    );
};

export default SuccessPanel;
