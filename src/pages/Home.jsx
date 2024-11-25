import React from 'react';

const Home = () => {
    const seasons = ["winter", "spring", "summer", "fall"]
    return (
        <div>
            {seasons.map(season=>
                <img key={season}
                    src={`/images/${season}.jpg`}
                    alt={season}>
                </img>
            )}
        </div>
    );
}

export default Home;
