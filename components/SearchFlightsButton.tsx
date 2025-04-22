import React from 'react';
import { FaSearch } from 'react-icons/fa';
import SpinnerMini from './SpinnerMini';

interface SearchFlightsButtonProps {
    isLoading: boolean;
    handleSearch: () => void;
}

const SearchFlightsButton: React.FC<SearchFlightsButtonProps> = ({
    handleSearch,
    isLoading,
}) => {
    return (
        <div className="relative flex flex-row justify-center mt-5 mb-15">
            <button
                onClick={handleSearch}
                className={`flex items-center justify-center gap-4 border-cyan-400 border-2 w-64 h-14 shadow-md shadow-cyan-300 rounded-2xl font-bold text-xl cursor-pointer text-cyan-600
                                        hover:text-xl transition-all duration-300
                                        hover:bg-cyan-300 mt-5
                                        ${isLoading ? 'bg-cyan-300' : ''}
                                        `}
            >
                {isLoading ? (
                    <>
                        <span>
                            <SpinnerMini />
                        </span>
                        <span>Searching...</span>
                    </>
                ) : (
                    <>
                        <span>
                            <FaSearch size={20} />
                        </span>
                        <span>Search Flights</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default SearchFlightsButton;
