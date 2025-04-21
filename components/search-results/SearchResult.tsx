import React from 'react';

const SearchResult = ({ res }: { res: any }) => {
    return (
        <div className="mx-auto mt-5 p-6 rounded-4xl shadow-xl outline-2 outline-cyan-400/10 bg-white">
            <h1 className="text-lg">
                {res.start_location} {`->`} {res.end_location}
            </h1>
            <p>{res.flight_duration} minutes</p>
            <p>${res.price}</p>
        </div>
    );
};

export default SearchResult;
