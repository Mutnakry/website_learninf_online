import React from 'react';
import Video from '../../assets/1734583716986WIN_20231125_12_38_52_Pro.mp4'

function VideoPremium() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <video className="w-full lg:h-96 md:h-72 h-56 object-contain" controls>
                <source
                    src={Video}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            
        </div>
    );
}

export default VideoPremium;
